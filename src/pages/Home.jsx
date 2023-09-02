import SidebarLinks from "../ui/SidebarLinks";
import HomeSlider from "../ui/HomeSlider";
import BestSelling from "../components/BestSelling";
import Category from "../components/Category";
import EnhanceMusic from "../components/EnhanceMusic";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";
import Services from "../components/Services";
import Container from "../ui/Container";

function Home() {
  return (
    <div>
      <Container styles="flex flex-col  gap-[90px]">
        <div className="flex  flex-col-reverse items-start gap-[20px] md:flex-row">
          <SidebarLinks />
          <HomeSlider />
        </div>
        <BestSelling />
        <Category />
        <EnhanceMusic />
        <OurProducts />
        <Featured />
        <Services />
      </Container>
    </div>
  );
}

export default Home;
