import { Fragment } from "react";
import { PiFlaskFill } from "react-icons/pi";
import { FaGoogle, FaMicrophone, FaGraduationCap } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { IoIosSearch, IoIosMusicalNote } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import { FaMoon } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";
import { MdOutlineTranslate, MdImageSearch } from "react-icons/md";
import { MdSportsCricket } from "react-icons/md";
import HomeFeatureBox from "../../components/common/HomeFeatureBox";
import HomeInfotabs from "../../components/common/HomeInfotabs";
import Posts from "./Posts";
import Footer from "../../components/common/Footer";
import UserLoginAvatar from "../../components/common/userLoginAvatar";

interface BaseScreenProps {
  setScreenType: React.Dispatch<
    React.SetStateAction<"base" | "search" | "audio" | "lens">
  >;
}

const BaseScreen: React.FC<BaseScreenProps> = ({ setScreenType }) => {
  return (
    <Fragment>
      <div className="flex justify-between items-center mt-3 px-3">
        <PiFlaskFill fontSize={30} />
        <div className="flex items-center gap-2 px-2 py-1 bg-[#2f3133] rounded-sm">
          <div className="flex items-center gap-1 px-2 py-1 bg-[#1f2125] rounded-[2px]">
            <FaGoogle />
            <p>Search</p>
          </div>
          <RiGeminiFill />
        </div>
        <UserLoginAvatar />
      </div>
      <p className="text-center text-3xl mt-8 px-3">Google</p>
      <div className="mt-8 items-center flex h-[60px] rounded-full bg-[#2f3133] px-3 mx-3 gap-3 sticky top-2">
        <IoIosSearch />
        <input
          type="text"
          className="h-full border-none bg-transparent flex-1 outline-none "
          placeholder="Search"
          onFocus={() => setScreenType("search")}
        />
        <FaMicrophone onClick={() => setScreenType("audio")} />
        <SiGooglelens className="ml-4" onClick={() => setScreenType("lens")} />
      </div>
      <div className="grid grid-cols-4 mt-8 gap-4 px-3">
        <HomeFeatureBox
          bg="bg-[#4d4531]"
          icon={<MdImageSearch color="yellow" size={16} />}
        />
        <HomeFeatureBox
          bg="bg-[#363f4e]"
          icon={<MdOutlineTranslate color="#99b4f2" size={16} />}
        />
        <HomeFeatureBox
          bg="bg-[#33423b]"
          icon={<FaGraduationCap color="#cde7d8" size={16} />}
        />
        <HomeFeatureBox
          bg="bg-[#493034]"
          icon={<IoIosMusicalNote color="#f08d86" size={16} />}
        />
      </div>
      <hr className="bg-[#2f3133] my-3" />
      <div className="flex overflow-hidden overflow-x-auto gap-4 px-3">
        <HomeInfotabs
          bottomLeft="50°C"
          icon={<FaMoon fill="#cadcfa" />}
          topText="Delhi"
        />
        <HomeInfotabs
          bottomLeft="Moderate"
          icon={<FiWind fill="yellow" />}
          topText="Air Quality Bad"
        />
        <HomeInfotabs
          bottomLeft="MI Won"
          icon={<MdSportsCricket fill="blue" />}
          topText="IPL"
        />
        <HomeInfotabs
          bottomLeft="RCB Won"
          icon={<MdSportsCricket fill="red" />}
          topText="IPL"
        />
      </div>
      <Posts />
      <Footer />
    </Fragment>
  );
};

export default BaseScreen;
