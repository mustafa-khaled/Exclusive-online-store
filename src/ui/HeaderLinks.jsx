import { NavLink } from "react-router-dom";
import { useSideBar } from "../context/navBarContext";
import { headerLinksData } from "../data/data";

function HeaderLinks({ isHeaderFixed }) {
  const { isSideBarActive } = useSideBar();

  return (
    <ul
      className={` header-links fixed	z-50 ${
        isSideBarActive ? "right-0 " : "right-[-100%]"
      } bg-lightGray ${
        isHeaderFixed ? "top-[70px]" : "top-[100px]"
      } order-3 flex h-[100vh] w-[100%] flex-col items-center justify-center gap-5 md:static md:order-2 md:h-0 md:w-auto md:flex-row`}
    >
      {headerLinksData.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.linkHref}
            className="relative font-semibold hover:text-secondary"
          >
            {link.title}
          </NavLink>
        );
      })}
    </ul>
  );
}

export default HeaderLinks;
