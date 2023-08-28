import HomeLinks from "../ui/HomeLinks";
import HomeSlider from "../ui/HomeSlider";

function Home() {
  return (
    <div>
      <div className="flex  flex-col-reverse items-start gap-[20px] md:flex-row">
        <HomeLinks />
        <HomeSlider />
      </div>
    </div>
  );
}

export default Home;
