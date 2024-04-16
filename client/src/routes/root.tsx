import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavBar } from "../layout";
import React from "react";

export function Root() {
  return (
    <div id="screen-layout">
      <NavBar>
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <img src="/logo.png" />
              Pantry
            </Navbar.Brand>
          </Container>
        </Navbar>
      </NavBar>

      <Outlet />
    </div>
  );
}
