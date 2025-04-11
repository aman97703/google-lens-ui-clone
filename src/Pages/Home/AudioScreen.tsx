import { useEffect, useRef, useState } from "react";

// Extend the Window interface to include SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
import { IoIosArrowBack, IoIosMusicalNote } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import TextToSpeechAnimation from "../../components/common/TextToSpeechAnimation";
import { useNavigate } from "react-router-dom";

interface audioScreenInterface {
  setScreenType: React.Dispatch<
    React.SetStateAction<"base" | "search" | "audio" | "lens">
  >;
}

const AudioScreen: React.FC<audioScreenInterface> = ({ setScreenType }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const navigate = useNavigate();

  const SpeechRecognition =
    window.SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported in this browser.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onstart = () => {
      setIsListening(true);
    };

    recognitionRef.current.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
      setIsListening(false);
      navigate(`/text-search?query=${speechResult}`);
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    // Start recognition immediately when component mounts
    recognitionRef.current.start();

    // Cleanup
    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  return (
    <div className="py-3 flex flex-col gap-3 min-h-[calc(100vh-40px)]">
      <div className="flex justify-between items-center px-3">
        <div className="h-7 w-7 rounded-full bg-[#2f3133] flex items-center justify-center">
          <IoIosArrowBack
            onClick={() => setScreenType("base")}
            color="#969a9d"
            size={18}
          />
        </div>
        <div className="h-7 w-7 rounded-full bg-[#2f3133] flex items-center justify-center">
          <AiOutlineGlobal color="#969a9d" size={18} />
        </div>
      </div>

      <div className="flex-1 py-10 flex flex-col justify-between items-center gap-20 mt-10">
        <p className="text-lg font-semibold text-gray-400">
          {isListening ? "Listening..." : "Speak Now"}
        </p>

        <TextToSpeechAnimation />

        {transcript && <p className="text-sm text-gray-300">{transcript}</p>}

        <div className="px-4 py-2 border border-gray-200 rounded-full w-fit flex items-center bg-[#1f2125] gap-2">
          <IoIosMusicalNote />
          <p className="text-sm text-gray-400">Search a song</p>
        </div>
      </div>
    </div>
  );
};

export default AudioScreen;
