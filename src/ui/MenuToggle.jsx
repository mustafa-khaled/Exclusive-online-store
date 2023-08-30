import { useSideBar } from "../context/navBarContext";

function MenuToggle() {
  const { toggleSideBar, isSideBarActive } = useSideBar();

  return (
    <i
      className={` ${
        isSideBarActive ? "fa-solid fa-xmark" : "fa-solid fa-bars"
      } z-40 cursor-pointer md:hidden`}
      onClick={toggleSideBar}
    ></i>
  );
}

export default MenuToggle;
