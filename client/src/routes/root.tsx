import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function Root() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            uPantry
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div id="content">
        <Outlet />
      </div>
    </>
  );
}
