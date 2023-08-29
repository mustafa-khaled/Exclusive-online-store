import HomeLinks from "../ui/HomeLinks";
import HomeSlider from "../ui/HomeSlider";
import BestSelling from "../components/BestSelling";
import Category from "../components/Category";
import EnhanceMusic from "../components/EnhanceMusic";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";
import Services from "../components/Services";

function Home() {
  return (
    <div className="flex flex-col  gap-[90px]">
      <div className="flex  flex-col-reverse items-start gap-[20px] md:flex-row">
        <HomeLinks />
        <HomeSlider />
      </div>
      <BestSelling />

      <Category />
      <EnhanceMusic />
      <OurProducts />
      <Featured />
      <Services />
      <div>Some</div>
    </div>
  );
}

export default Home;