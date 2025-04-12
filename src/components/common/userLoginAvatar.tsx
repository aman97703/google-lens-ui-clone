import { useAuth } from "../../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { CiCircleChevDown } from "react-icons/ci";
import { BsIncognito } from "react-icons/bs";
import { MdHistory, MdOutlineInterests, MdKey } from "react-icons/md";
import { AiFillPropertySafety } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const UserLoginAvatar = () => {
  const { user, signInWithGoogle } = useAuth();
  return user ? (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar className="bg-gray-100 border">
          <AvatarImage
            src={user.photoURL!}
            alt="user profile"
            className="bg-gray-100 border"
          />
          <AvatarFallback>
            {user.displayName?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Google</DialogTitle>
        </DialogHeader>
        <div>
          <div className="flex items-center gap-2 w-full">
            <Avatar className="bg-gray-100 border">
              <AvatarImage
                src={user.photoURL!}
                alt="user profile"
                className="bg-gray-100 border"
              />
              <AvatarFallback>
                {user.displayName?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm">{user.displayName}</p>
              <p className="text-sm">{user.email}</p>
            </div>
            <CiCircleChevDown />
          </div>
          <div className="py-1 px-2 rounded-lg border border-gray-500 w-fit mt-3 mx-auto">
            <p className="text-[12px]">Manage your Google Account</p>
          </div>
          <hr className="my-3 bg-gray-500" />
          <div className="px-2 flex items-center gap-5">
            <BsIncognito size={18} />
            <p className="text-sm">Turn on Incognito</p>
          </div>
          <hr className="my-3 bg-gray-500" />
          <div className="px-2 flex  gap-5">
            <MdHistory size={18} className="mt-[2px]" />
            <div className="flex-1">
              <div className="flex flex-1 border-b border-gray-500 pb-2 mb-2">
                <p className="text-sm flex-1">Search history</p>
                <p className="text-[10px] text-gray-400">Saving</p>
              </div>
              <p className="text-sm flex-1">Delete last 15 mins</p>
            </div>
          </div>
          <hr className="my-3 bg-gray-500" />
          <div className="px-2 flex items-center gap-5 pb-1.5">
            <AiFillPropertySafety size={18} />
            <p className="text-sm">Safe Search</p>
          </div>
          <div className="px-2 flex items-center gap-5 py-1.5">
            <MdOutlineInterests size={18} />
            <p className="text-sm">Interests</p>
          </div>
          <div className="px-2 flex items-center gap-5 py-1.5">
            <MdKey size={18} />
            <p className="text-sm">Passsword</p>
          </div>
          <div className="px-2 flex items-center gap-5 py-1.5">
            <CgProfile size={18} />
            <p className="text-sm">Your Profile</p>
          </div>
          <hr className="my-3 bg-gray-500" />
          <div className="px-2 flex items-center gap-5 pb-1.5">
            <IoSettingsOutline size={18} />
            <p className="text-sm">Settings</p>
          </div>
          <div className="px-2 flex items-center gap-5 py-1.5">
            <FaRegQuestionCircle size={18} />
            <p className="text-sm">Help and feedback</p>
          </div>
          <hr className="my-3 bg-gray-500" />
          <div className="flex items-center gap-3 py-1.5 px-2 justify-center">
            <p className="text-[10px]">Privacy Policy</p>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <p className="text-[10px]">Terms of Service</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : (
    <p className="text-sm underline" onClick={signInWithGoogle}>
      Sign in
    </p>
  );
};

export default UserLoginAvatar;
