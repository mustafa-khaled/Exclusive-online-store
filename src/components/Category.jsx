import { categoryLinks } from "../data/data";
import GridContainer from "../ui/GridContainer";
import SectionHead from "../ui/SectionHead";

function Category() {
  return (
    <div className="border-b border-gray  pb-[40px]">
      <SectionHead head="Brose By Category" description="Categories" />

      <GridContainer styles=" mt-[20px]  text-primary">
        {categoryLinks.map((link) => {
          return (
            <div
              key={link.class}
              className="cursor-pointer border-[2px] border-gray py-[30px] text-center text-2xl  hover:bg-secondary hover:text-white"
            >
              <i className={link.class}></i>
            </div>
          );
        })}
      </GridContainer>
    </div>
  );
}

export default Category;
