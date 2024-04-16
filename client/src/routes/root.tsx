import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavBar } from "../layout";

export function Root() {
  return (
    <div id="screen-layout">
      <NavBar>
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              {/* <img src="/logo.png" /> */}
              <span style={{ opacity: 0.5 }}>u</span>Pantry
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavBar>

      <Outlet />
    </div>
  );
}
