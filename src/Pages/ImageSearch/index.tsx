import moment from "moment";
import { useEffect } from "react";
import { CiBatteryCharging, CiWifiOn } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { ImageResults } from "../../constants/ImageResults";
import UserLoginAvatar from "../../components/common/userLoginAvatar";

const ImageSearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const croppedImage = location.state?.image; // Access the cropped image from the state

  useEffect(() => {
    if (!croppedImage) {
      navigate("/");
    }
  }, []);
  return (
    <div className="py-2 min-h-screen">
      <div className="flex justify-between px-3">
        <p className="text-sm">{moment().format("HH:mm")}</p>
        <div className="flex gap-1">
          <CiWifiOn />
          <CiBatteryCharging />
        </div>
      </div>
      <div className="mt-2 items-center flex h-[50px] rounded-full bg-[#2f3133] px-3 mx-3 gap-3 sticky top-2">
        <FaGoogle />
        <img
          src={croppedImage}
          alt="image to search"
          className="h-[80%] aspect-square"
        />
        <input
          type="text"
          className="h-full border-none bg-transparent flex-1 outline-none "
          placeholder="Search or type URL"
        />
        <UserLoginAvatar/>
      </div>
      <Tabs defaultValue="all" className="w-full mt-2 px-3">
        <TabsList className="flex w-full gap-2">
          <TabsTrigger
            value="all"
            className="bg-transparent border-0 p-0 data-[state=active]:bg-transparent"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="products"
            className="bg-transparent border-0 p-0 data-[state=active]:bg-transparent"
          >
            Products
          </TabsTrigger>
          <TabsTrigger
            value="visual"
            className="bg-transparent border-0 p-0 data-[state=active]:bg-transparent"
          >
            Visual matches
          </TabsTrigger>
          <TabsTrigger
            value="about"
            className="bg-transparent border-0 p-0 data-[state=active]:bg-transparent"
          >
            About this image
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="flex items-center gap-2 border-b-[1px] border-b-[#2f3133] py-2">
            <IoMdInformationCircleOutline />
            <p className="text-sm text-gray-400">
              All results will be displayed here.
            </p>
          </div>
          <div className="py-2 px-3 grid grid-cols-2 md:grid-cols-6 sm:grid-cols-4 gap-3">
            {ImageResults.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt="result image"
                  className="rounded-lg object-cover"
                />
                <p className="text-sm text-gray-500 mt-1">{item.website}</p>
                <p className="text-base font-semibold text-white mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImageSearchPage;
