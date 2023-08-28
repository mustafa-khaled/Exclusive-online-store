import { useSideBar } from "../context/navBarContext";

function HeaderLinks() {
  const { isSideBarActive } = useSideBar();

  return (
    <ul
      className={` fixed   ${
        isSideBarActive ? "right-0" : "right-[-100%]"
      } top-[70px] order-3 flex h-[100vh] w-[100%] flex-col items-center justify-center gap-5 bg-green-500 md:static md:order-2 md:h-0 md:w-auto md:flex-row`}
    >
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
      <li>Sign Up </li>
    </ul>
  );
}

export default HeaderLinks;
