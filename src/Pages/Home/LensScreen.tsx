import { useState, useEffect, useRef } from "react";
import { Capacitor } from "@capacitor/core";
import {
  Camera,
  CameraResultType,
  CameraSource,
  CameraDirection,
} from "@capacitor/camera";
import { useNavigate } from "react-router-dom";
import CropperModal from "../../components/common/CropperModal";

interface LensScreenInterface {
  setScreenType: React.Dispatch<
    React.SetStateAction<"base" | "search" | "audio" | "lens">
  >;
}

const LensScreen: React.FC<LensScreenInterface> = ({ setScreenType }) => {
  const [imageData, setImageData] = useState<string | null>(null);
  const navigate = useNavigate();
  const [showCropper, setShowCropper] = useState(false);
  const cameraTriggered = useRef(false); // Track if the camera has been triggered

  // Automatically trigger camera when component mounts
  useEffect(() => {
    if (!cameraTriggered.current) {
      handleImageCapture();
      cameraTriggered.current = true; // Mark the camera as triggered
    }
  }, []);

  const handleImageCapture = async () => {
    if (Capacitor.isNativePlatform()) {
      try {
        const photo = await Camera.getPhoto({
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera,
          direction: CameraDirection.Rear,
          quality: 90,
        });

        setImageData(photo.dataUrl || null);
        setShowCropper(true);
      } catch (error) {
        console.error("Camera capture failed", error);
      }
    } else {
      // Fallback: simulate click on hidden file input
      document.getElementById("fileInput")?.click();
    }
  };

  const handleWebImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImageData(result);
      setShowCropper(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = (croppedImg: string) => {
    setImageData(croppedImg);
    setShowCropper(false);
    navigate(`/image-search`, {
      state: { image: croppedImg },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-40px)] p-4 text-white">
      <h1 className="text-xl font-bold mb-6">Google Lens - Camera</h1>

      <button
        onClick={handleImageCapture}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
      >
        Open Camera Again
      </button>

      {/* Web fallback input */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleWebImageUpload}
        className="hidden"
        capture="environment"
      />

      {imageData && (
        <div className="mt-6">
          <p className="mb-2 text-gray-300">Captured Image:</p>
          <img
            src={imageData}
            alt="Captured"
            className="max-w-full rounded-md shadow"
          />
        </div>
      )}

      <button
        onClick={() => setScreenType("base")}
        className="mt-10 text-sm text-gray-400 underline"
      >
        ← Go Back
      </button>

      <CropperModal
        image={imageData || ""}
        open={showCropper}
        onClose={() => setShowCropper(false)}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
};

export default LensScreen;
