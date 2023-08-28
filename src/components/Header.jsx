import Container from "../ui/Container";
import HeaderLinks from "../ui/HeaderLinks";
import HeaderOperations from "../ui/HeaderOperations";
import Logo from "../ui/Logo";

function Header() {
  return (
    <header className="  flex h-[70px] items-center border-b border-gray text-primary">
      <Container styles={"flex items-center justify-between gap-[10px]"}>
        <Logo />
        <HeaderLinks />
        <HeaderOperations />
      </Container>
    </header>
  );
}

export default Header;
