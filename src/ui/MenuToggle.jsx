import { useSideBar } from "../context/navBarContext";

function MenuToggle() {
  const { toggleSideBar } = useSideBar();

  return (
    <i
      className="fa-solid fa-bars cursor-pointer  md:hidden"
      onClick={toggleSideBar}
    ></i>
  );
}

export default MenuToggle;
