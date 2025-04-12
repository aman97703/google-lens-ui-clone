import { News } from "../../constants/News";

const Posts = () => {
  return (
    <div className="mt-3 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4 px-3 pb-[100px]">
      {News.map((item) => (
        <div key={item.id} className="">
          <img src={item.image} alt="news image" className="rounded-lg" />
          <p className="text-xl font-semibold mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
