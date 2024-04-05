import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <h1>uPantry</h1>

      <Outlet />
    </>
  );
}
