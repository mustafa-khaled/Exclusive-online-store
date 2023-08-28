import { NavLink } from "react-router-dom";
import { useSideBar } from "../context/navBarContext";

function HeaderLinks() {
  const { isSideBarActive } = useSideBar();

  return (
    <ul
      className={` fixed z-50	 ${
        isSideBarActive ? "right-0" : "right-[-100%]"
      } top-[70px] order-3 flex h-[100vh] w-[100%] flex-col items-center justify-center gap-5 bg-gray md:static md:order-2 md:h-0 md:w-auto md:flex-row`}
    >
      <NavLink to="/" className={`  font-semibold`}>
        Home
      </NavLink>
      <NavLink to="/contact" className={`   font-semibold`}>
        Contact
      </NavLink>
      <NavLink to="/about" className={`   font-semibold`}>
        About
      </NavLink>
      <NavLink to="/signUp" className={`   font-semibold`}>
        Sign Up
      </NavLink>
    </ul>
  );
}

export default HeaderLinks;
