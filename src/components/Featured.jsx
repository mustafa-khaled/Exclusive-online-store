import SectionHead from "../ui/SectionHead";
import photoOne from "../assets/arr1.png";
import photoTwo from "../assets/arr2.png";
import photoThree from "../assets/arr3.png";
import photoFour from "../assets/arr4.png";

function Featured() {
  return (
    <div>
      <SectionHead head="New Arrival" description="Featured" />
      <div className=" flex flex-col items-start gap-[20px] md:flex-row">
        <div className="w-full md:w-[50%]">
          <img src={photoOne} alt="" className="w-full" />
        </div>

        <div className="w-full md:w-[50%]">
          <div className="mb-[20px]">
            <img src={photoTwo} alt="" className="w-full" />
          </div>

          <div className="flex flex-col items-start gap-[20px] md:flex-row">
            <div className="w-full md:w-[50%]">
              <img src={photoThree} alt="" className="w-full" />
            </div>

            <div className="w-full md:w-[50%]">
              <img src={photoFour} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
