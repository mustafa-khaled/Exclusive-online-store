import GridContainer from "../ui/GridContainer";
import SectionHead from "../ui/SectionHead";

const links = [
  {
    class: "fa-solid fa-mobile",
  },
  { class: "fa-solid fa-desktop" },
  { class: "fa-solid fa-camera" },
  { class: "fa-solid fa-headphones" },
  { class: "fa-solid fa-gamepad" },
];

function Category() {
  return (
    <div className="border-b border-gray  pb-[40px]">
      <SectionHead head="Brose By Category" description="Categories" />

      <GridContainer styles=" mt-[20px]  text-primary">
        {links.map((link) => {
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
