import { Link } from "react-router-dom";
import { HomeLinksData } from "../data/data";

function HomeLinks() {
  return (
    <ul className="flex h-[400px] w-[100%]  flex-col items-start justify-around  px-[20px] pt-[20px] md:w-[20%] md:border-r md:border-gray  ">
      {HomeLinksData.map((link) => {
        return (
          <li key={link.id}>
            <Link className="font-medium ">{link.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default HomeLinks;
