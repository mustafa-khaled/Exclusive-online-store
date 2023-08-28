import photo from "../assets/MusicEx.png";
import Button from "../ui/Button";

function EnhanceMusic() {
  return (
    <div
      style={{ backgroundImage: `url(${photo})` }}
      className="  flex h-[400px] items-center justify-start bg-red-400 bg-cover bg-center"
    >
      <div className="px-[20px]">
        <p className=" text-lg font-semibold text-secondary md:text-xl">
          Categories
        </p>
        <h2 className="my-[20px] text-2xl text-white md:text-4xl">
          Enhance Your Music Experience
        </h2>
        <Button>By Now</Button>
      </div>
    </div>
  );
}

export default EnhanceMusic;
