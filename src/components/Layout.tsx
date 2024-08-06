import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Header />}
      <Outlet />
    </>
  );
};
