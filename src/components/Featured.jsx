import { Link } from "react-router-dom";
import { featuresData } from "../data/data";
import SectionHead from "../ui/SectionHead";

function Featured() {
  return (
    <div>
      <SectionHead head="New Arrival" description="Featured" />

      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {featuresData.map((feature) => {
          return (
            <div key={feature.id} className={`${feature.boxStyles} relative `}>
              <img src={feature.imageSrc} alt="" className="w-full" />
              <div className="absolute bottom-[10%] left-[20px] hidden   w-[70%] text-white sm:block">
                <h3 className="text-xl font-semibold md:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray md:text-lg">
                  {feature.description}
                </p>
                <Link className="text-xs  underline">{feature.link}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
