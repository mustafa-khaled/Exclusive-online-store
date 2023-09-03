import { Link } from "react-router-dom";
import { headerOperationsData } from "../data/data";
import MenuToggle from "./MenuToggle";
import SearchInput from "./SearchInput";

function HeaderOperations() {
  return (
    <div className="flex items-center gap-[15px] md:order-2 ">
      <SearchInput />

      {headerOperationsData.map((item) => (
        <Link key={item.id} to={item.linkHref}>
          <i className={`${item.icon} text-sm sm:text-lg`}></i>
        </Link>
      ))}

      <MenuToggle />
    </div>
  );
}

export default HeaderOperations;
