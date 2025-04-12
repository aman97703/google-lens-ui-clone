import { Fragment, useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import { GoClock } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface searchScreenInterface {
  setScreenType: React.Dispatch<
    React.SetStateAction<"base" | "search" | "audio" | "lens">
  >;
}

const SearchScreen: React.FC<searchScreenInterface> = ({ setScreenType }) => {
  const navigate = useNavigate();
  const [searchHistory, setSearchHistory] = useState<
    { id: number; text: string }[]
  >([]);
  const [value, setValue] = useState<string>("");
  const handleMoveToSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/text-search?query=${value}`);
      const updatedHistory = [
        ...searchHistory,
        { id: searchHistory.length + 1, text: value },
      ];
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
  };

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);
  return (
    <Fragment>
      <div className="mt-2 items-center flex h-[50px] rounded-full bg-[#2f3133] px-3 mx-3 gap-3 sticky top-2">
        <IoIosArrowBack onClick={() => setScreenType("base")} />
        <input
          type="text"
          className="h-full border-none bg-transparent flex-1 outline-none "
          placeholder="Search or type URL"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleMoveToSearch}
        />
        <FaMicrophone onClick={() => setScreenType("audio")} />
        <SiGooglelens className="ml-4" onClick={() => setScreenType("lens")} />
      </div>
      <div className="flex justify-between items-center mt-2 px-3">
        <p className="text-[12px] text-gray-300">Recent Searches</p>
        <p className="text-[12px] text-gray-300">Manage History</p>
      </div>
      <div className="px-3 mt-5 flex flex-col gap-3 overflow-hidden overflow-y-auto max-h-[calc(100vh-150px)]">
        {searchHistory.map((item) => (
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
