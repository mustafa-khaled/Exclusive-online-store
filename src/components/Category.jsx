import { categoryLinks } from "../data/data";
import GridContainer from "../ui/GridContainer";
import SectionHead from "../ui/SectionHead";
import SmallBox from "../ui/SmallBox";

function Category() {
  return (
    <div className="border-b border-gray  pb-[40px]">
      <SectionHead head="Brose By Category" description="Categories" />

      <GridContainer styles=" mt-[20px]  text-primary">
        {categoryLinks.map((link) => {
          return (
            <SmallBox key={link.class}>
              <i className={link.class}></i>
            </SmallBox>
          );
        })}
      </GridContainer>
    </div>
  );
}

export default Category;
