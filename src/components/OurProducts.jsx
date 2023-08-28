import SectionHead from "../ui/SectionHead";
import GridContainer from "../ui/GridContainer";

const tempBoxes = [
  { title: "One" },
  { title: "Two" },
  { title: "Three" },
  { title: "Four " },
  { title: "Five" },
  { title: "Sex" },
  { title: "Seven" },
  { title: "Eight" },
  { title: "Nine" },
  { title: "Ten" },
];

function OurProducts() {
  return (
    <div>
      <SectionHead
        head="Explore Our Products"
        description="Our Products"
        operations="operations"
      />

      <GridContainer styles="mt-[20px]">
        {tempBoxes.map((box) => {
          return (
            <div key={box.title} className="bg-secondary text-center">
              {box.title}
            </div>
          );
        })}
      </GridContainer>
    </div>
  );
}

export default OurProducts;
