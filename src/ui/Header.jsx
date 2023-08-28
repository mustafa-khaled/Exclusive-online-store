import Container from "./Container";
import HeaderLinks from "./HeaderLinks";
import HeaderOperations from "./HeaderOperations";
import Logo from "./Logo";

function Header() {
  return (
    <header className="  text-primary border-gray flex h-[70px] items-center border-b">
      <Container styles={"flex items-center justify-between gap-[10px]"}>
        <Logo />
        <HeaderLinks />
        <HeaderOperations />
      </Container>
    </header>
  );
}

export default Header;
