import { Link } from "react-router-dom";
import { HomeSideBarData } from "../data/data";

function HomeLinks() {
  return (
    <ul className="flex h-[400px] w-[100%]  flex-col items-start justify-around  px-[20px] pt-[20px] md:w-[20%] md:border-r md:border-gray  ">
      {HomeSideBarData.map((link) => {
        return (
          <li key={link.id} className="w-full border-gray hover:border-b">
            <Link className="  font-medium  hover:opacity-[0.7]">
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default HomeLinks;
