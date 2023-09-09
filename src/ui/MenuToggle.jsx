import { useSideBar } from "../context/navBarContext";

function MenuToggle() {
  const { toggleSideBar, isSideBarActive } = useSideBar();

  return (
    <div className=" w-[15px] ">
      <i
        className={` ${
          isSideBarActive ? "fa-solid fa-xmark" : "fa-solid fa-bars"
        } cursor-pointer text-lg md:hidden`}
        onClick={toggleSideBar}
      ></i>
    </div>
  );
}

export default MenuToggle;
