interface HomeInfotabInterface {
  topText: string;
  bottomLeft: string;
  icon: React.ReactNode;
}

const HomeInfotabs: React.FC<HomeInfotabInterface> = ({
  bottomLeft,
  icon,
  topText,
}) => {
  return (
    <div className="p-3 border border-gray-100 rounded-md min-w-[120px]">
      <p className="text-[10px]">{topText}</p>
      <div className="flex justify-between items-center mt-1 gap-3">
        <p className="text-sm">{bottomLeft}</p>
        {icon}
      </div>
    </div>
  );
};

export default HomeInfotabs;
