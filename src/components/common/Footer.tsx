import {
  IoIosHome,
  IoMdNotifications,
  IoMdMenu,
} from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-[#2f3133] grid grid-cols-4 px-3 gap-4 pt-3 pb-5">
      <div className="py-3 px-4 rounded-4xl bg-[#394357] flex justify-center items-center">
        <IoIosHome size={20} color="#8ab5f8" />
      </div>
      <div className="py-3 px-4 rounded-4xl flex justify-center items-center">
        <BsClockHistory size={20} className="text-gray-500" />
      </div>
      <div className="py-3 px-4 rounded-4xl flex justify-center items-center">
        <IoMdNotifications size={20} className="text-gray-500" />
      </div>
      <div className="py-3 px-4 rounded-4xl flex justify-center items-center">
        <IoMdMenu size={20} className="text-gray-500" />
      </div>
    </div>
  );
};

export default Footer;
