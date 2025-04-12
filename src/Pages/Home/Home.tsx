import { CiWifiOn, CiBatteryCharging } from "react-icons/ci";
import moment from "moment";
import { useState } from "react";
import BaseScreen from "./BaseScreen";
import SearchScreen from "./SearchScreen";
import AudioScreen from "./AudioScreen";
import LensScreen from "./LensScreen";

const Home = () => {
  const [screeType, setScreenType] = useState<
    "base" | "search" | "audio" | "lens"
  >("base");

  return (
    <div className="py-2 min-h-screen">
      <div className="flex justify-between px-3">
        <p className="text-sm">{moment().format("HH:mm")}</p>
        <div className="flex gap-1">
          <CiWifiOn />
          <CiBatteryCharging />
        </div>
      </div>
      {screeType === "search" ? (
        <SearchScreen setScreenType={setScreenType} />
      ) : screeType === "audio" ? (
        <AudioScreen setScreenType={setScreenType} />
      ) : screeType === "lens" ? (
        <LensScreen setScreenType={setScreenType} />
      ) : (
        <BaseScreen setScreenType={setScreenType} />
      )}
    </div>
  );
};

export default Home;
