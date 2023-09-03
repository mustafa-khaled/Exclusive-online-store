import { Link } from "react-router-dom";
import { HomeSideBarData } from "../data/data";

function SidebarLinks() {
  return (
    <ul className="flex h-[400px] w-[100%]  flex-col items-start gap-[20px]  px-[20px] pt-[20px] md:w-[20%] md:border-r md:border-gray  ">
      {HomeSideBarData.map((link) => {
        return (
          <li key={link.id} className="w-full border-gray hover:border-b">
            <Link
              to={link.linkHref}
              className="  font-medium  hover:opacity-[0.7]"
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SidebarLinks;
