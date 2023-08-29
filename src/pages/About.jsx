import photo from "../assets/aboutHero.png";
import Container from "../ui/Container";
import Services from "../components/Services";
// import { aboutDate } from "../data/data";

function About() {
  return (
    <Container>
      <div className="flex min-h-[90vh] flex-col items-center  justify-around gap-[20px] text-primary md:flex-row md:justify-between">
        <div className="w-[100%] md:w-[50%]">
          <h1 className="text-3xl font-semibold">Our Story</h1>
          <p className="my-[20px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
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
      <Services />
    </Container>
  );
}

export default About;
