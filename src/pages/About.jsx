import { aboutData } from "../data/data";
import { teamData } from "../data/data";
import photo from "../assets/aboutHero.png";
import Container from "../ui/Container";
import Services from "../components/Services";
import SmallBox from "../ui/SmallBox";
import SwiperComponent from "../ui/SwiperComponent";
import GridContainer from "../ui/GridContainer";

function About() {
  return (
    <>
      <Container styles="flex flex-col  gap-[90px]">
        <div className="flex min-h-[90vh] flex-col items-center  justify-around gap-[20px] text-primary md:flex-row md:justify-between">
          <div className="w-[100%] md:w-[50%]">
            <h1 className="text-3xl font-semibold">Our Story</h1>
            <p className="my-[20px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <img src={photo} alt="Shopping" />
          </div>
        </div>

        <GridContainer
          cols="grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
          className="  text-primary md:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
        >
          {aboutData?.map((item) => {
            return (
              <SmallBox key={item.id}>
                <div>
                  <i className={item.icon}></i>

                  <h3 className="my-[10px] text-2xl font-semibold">
                    {item.number}
                  </h3>
                  <p className=" text-sm">{item.title}</p>
                </div>
              </SmallBox>
            );
          })}
        </GridContainer>
      </Container>
      <Container styles="flex flex-col  gap-[90px] mt-[90px]">
        <SwiperComponent data={teamData} />
        <Services />
      </Container>
    </>
  );
}

export default About;
