import { Outlet, useNavigation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavBar } from "../layout";
import { Hourglass } from "react-loader-spinner";

export function Root() {
  const navigation = useNavigation();

  return (
    <>
      <div id="screen-layout">
        <NavBar>
          <Navbar>
            <Container>
              <Navbar.Brand href="/">
                <span style={{ opacity: 0.5 }}>u</span>Pantry
              </Navbar.Brand>
            </Container>
          </Navbar>
        </NavBar>

        <Outlet />
      </div>

      <div
        id="loading-overlay"
        style={{
          visibility: navigation.state === "loading" ? "visible" : "hidden",
        }}
      >
        <Hourglass colors={["rgba(0, 128, 128, 1)", "rgba(0, 128, 128, 1)"]} />
      </div>
    </>
  );
}
