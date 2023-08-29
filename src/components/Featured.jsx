import SectionHead from "../ui/SectionHead";
import photoOne from "../assets/arr1.png";
import photoTwo from "../assets/arr2.png";
import photoThree from "../assets/arr3.png";
import photoFour from "../assets/arr4.png";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div>
      <SectionHead head="New Arrival" description="Featured" />

      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="relative col-span-3 row-span-2">
          <img src={photoTwo} alt="" className="w-full" />
          <div className="absolute bottom-[10%] left-[20px] hidden   w-[70%] text-white sm:block">
            <h3 className="text-xl font-semibold md:text-3xl">
              Women's Collections
            </h3>
            <p className="text-sm text-gray md:text-lg">
              Featured Women's Collections That Give You Anther Vibe.
            </p>
            <Link className="text-xs  underline">Shop Now</Link>
          </div>
        </div>
        <div className="relative col-start-2 row-start-3">
          <img src={photoOne} alt="" className="w-full" />

          <div className="absolute bottom-[10%] left-[20px] hidden   w-[70%] text-white sm:block">
            <h3 className="text-xl font-semibold md:text-3xl">
              Play Station-5
            </h3>
            <p className="text-sm text-gray md:text-lg">
              Black And White Version Of PS-5 Coming Out On Sale.
            </p>
            <Link className="text-xs  underline">Shop Now</Link>
          </div>
        </div>
        <div className="relative col-start-1 row-start-3">
          <img src={photoThree} alt="" className="w-full" />

          <div className="absolute  bottom-[10%] left-[20px] hidden  w-[70%] text-white sm:block">
            <h3 className="text-xl font-semibold md:text-3xl">Perfume</h3>
            <p className="text-sm text-gray md:text-lg">
              Cocci Intense Out EDP.
            </p>
            <Link className="text-xs  underline">Shop Now</Link>
          </div>
        </div>
        <div className="relative row-start-3">
          <img src={photoFour} alt="" className="w-full" />

          <div className="absolute  bottom-[10%] left-[20px] hidden  w-[70%] text-white sm:block">
            <h3 className="text-xl font-semibold md:text-3xl">Speakers</h3>
            <p className="text-sm text-gray md:text-lg">
              Amazon Wireless Speakers.
            </p>
            <Link className="text-xs  underline">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
