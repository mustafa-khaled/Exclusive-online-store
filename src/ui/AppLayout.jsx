import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default AppLayout;
