import { cn } from "../../lib/utils";

interface HomeFeatureBoxProps {
  bg: string;
  icon: React.ReactNode;
}

const HomeFeatureBox = ({ bg, icon }: HomeFeatureBoxProps) => {
  return (
    <div
      className={cn(
        "w-full rounded-4xl flex items-center justify-center h-[50px]",
        bg
      )}
    >
      {icon}
    </div>
  );
};

export default HomeFeatureBox;
