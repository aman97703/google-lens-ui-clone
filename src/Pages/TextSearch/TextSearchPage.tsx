import moment from "moment";
import { CiBatteryCharging, CiWifiOn } from "react-icons/ci";
import { PiFlaskFill } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { SiGooglelens } from "react-icons/si";
import useQuery from "../../hooks/useQuery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { textResult } from "../../constants/textResult";
import UserLoginAvatar from "../../components/common/userLoginAvatar";

const TextSearchPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const searchQuery = query.get("query")!;
  const [value, setValue] = useState<string>(searchQuery);

  const handleMoveToSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/text-search?query=${value}`);
    }
  };
  return (
    <div className="py-2 min-h-screen">
      <div className="flex justify-between px-3">
        <p className="text-sm">{moment().format("HH:mm")}</p>
        <div className="flex gap-1">
          <CiWifiOn />
          <CiBatteryCharging />
        </div>
      </div>
      <div className="flex justify-between items-center mt-3 px-3">
        <PiFlaskFill fontSize={30} />
        <p className="text-lg font-semibold">Google</p>
        <UserLoginAvatar />
      </div>
      <div className="mt-8 items-center flex h-[45px] rounded-full bg-[#2f3133] px-3 mx-3 gap-3 sticky top-2">
        <IoIosSearch />
        <input
          type="text"
          className="h-full border-none bg-transparent flex-1 outline-none "
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleMoveToSearch}
        />
        <FaMicrophone />
        <SiGooglelens />
      </div>
      <div className="mt-2 flex flex-col gap-3">
        {textResult.map((item) => (
          <div key={item.id} className="bg-[#2c2f3b] px-3 py-2">
            <div
              className="flex gap-2 items-center"
              onClick={() => window.open(item.link, "_blank")}
            >
              <img
                src={`https://picsum.photos/18?random=${item.id}`}
                alt="image"
                className="h-5 w-5 rounded-full aspect-square object-center"
              />
              <div>
                <p className="text-base text-blue-400">{item.title}</p>
                <p className="text-[9px] mt-1">{item.link}</p>
              </div>
            </div>
            <p className="mt-2 text-[12px]">
              {moment().format("DD MMM YYYY")} - {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSearchPage;
