import { Link } from "react-router-dom";
import MenuToggle from "./MenuToggle";
import SearchInput from "./SearchInput";

function HeaderOperations() {
  return (
    <div className="flex items-center gap-[15px] md:order-2 ">
      <SearchInput />
      <Link to={"/signUp"}>
        <i className="fa-regular fa-user"></i>
      </Link>
      <i className="fa-regular fa-heart "></i>
      <i className="fa-solid fa-cart-shopping"></i>

      <MenuToggle />
    </div>
  );
}

export default HeaderOperations;
