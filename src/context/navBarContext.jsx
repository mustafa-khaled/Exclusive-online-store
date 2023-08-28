import { createContext, useContext, useState } from "react";

const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  function toggleSideBar() {
    setIsSideBarActive((active) => !active);
  }

  function closeSideBar() {
    setIsSideBarActive(false);
  }

  return (
    <SideBarContext.Provider
      value={{ isSideBarActive, toggleSideBar, closeSideBar }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

function useSideBar() {
  const context = useContext(SideBarContext);
  if (context === "undefined") {
    throw new Error("Sidebar Context Was Used OutSide Sidebar Provider");
  }
  return context;
}

export { useSideBar, SideBarProvider };
