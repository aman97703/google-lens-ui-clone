import { Fragment, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import { GoClock } from "react-icons/go";

interface searchScreenInterface {
  setScreenType: React.Dispatch<
    React.SetStateAction<"base" | "search" | "audio" | "lens">
  >;
}

const SearchScreen: React.FC<searchScreenInterface> = ({ setScreenType }) => {
  const [serachHistory] = useState<{ id: number; text: string }[]>([
    { id: 1, text: "How to cook pasta" },
    { id: 2, text: "React useState tutorial" },
    { id: 3, text: "Weather today" },
    { id: 4, text: "Latest tech news" },
    { id: 5, text: "JavaScript array methods" },
    { id: 6, text: "Nearby restaurants" },
    { id: 7, text: "CSS grid vs flexbox" },
    { id: 8, text: "Best programming languages 2023" },
    { id: 9, text: "How to fix a flat tire" },
    { id: 10, text: "Top movies to watch" },
    { id: 11, text: "Travel destinations 2023" },
    { id: 12, text: "Healthy smoothie recipes" },
    { id: 13, text: "Learn TypeScript" },
    { id: 14, text: "Upcoming concerts near me" },
    { id: 15, text: "How to meditate effectively" },
  ]);
  return (
    <Fragment>
      <div className="mt-2 items-center flex h-[50px] rounded-full bg-[#2f3133] px-3 mx-3 gap-3 sticky top-2">
        <IoIosArrowBack onClick={() => setScreenType("base")} />
        <input
          type="text"
          className="h-full border-none bg-transparent flex-1 outline-none "
          placeholder="Search or type URL"
        />
        <FaMicrophone onClick={() => setScreenType("audio")} />
        <SiGooglelens className="ml-4" />
      </div>
      <div className="flex justify-between items-center mt-2 px-3">
        <p className="text-[12px] text-gray-300">Recent Searches</p>
        <p className="text-[12px] text-gray-300">Manage History</p>
      </div>
      <div className="px-3 mt-5 flex flex-col gap-3 overflow-hidden overflow-y-auto max-h-[calc(100vh-150px)]">
        {serachHistory.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <div className="h-5 w-5 rounded-full bg-[#2f3133] flex items-center justify-center">
              <GoClock color="#969a9d" size={16} />
            </div>
            <p className="text-[#969a9d] text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SearchScreen;
