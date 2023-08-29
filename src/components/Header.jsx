import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import HeaderLinks from "../ui/HeaderLinks";
import HeaderOperations from "../ui/HeaderOperations";
import Logo from "../ui/Logo";

function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  // Make The Header Fixed On Scrolling
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header Promotion */}
      <div className="bg-primary p-[10px] text-center text-gray">
        <p className="text-sm">
          Summer Sales For All Swim Suits And Free Express Delivery Of-50%
        </p>
      </div>

      <header
        className={`flex h-[70px] items-center border-b border-gray text-primary ${
          isHeaderFixed ? "fixed-header" : ""
        }`}
      >
        <Container styles={"flex items-center justify-between gap-[10px]"}>
          <Logo />
          <HeaderLinks />
          <HeaderOperations />
        </Container>
      </header>
    </>
  );
}

export default Header;
