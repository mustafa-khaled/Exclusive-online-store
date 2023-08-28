import Container from "./Container";
import HeaderLinks from "./HeaderLinks";
import HeaderOperations from "./HeaderOperations";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex h-[70px] items-center  bg-red-500">
      <Container styles={"flex items-center justify-between"}>
        <Logo />
        <HeaderLinks />
        <HeaderOperations />
      </Container>
    </header>
  );
}

export default Header;
