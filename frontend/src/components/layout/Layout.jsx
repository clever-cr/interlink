import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
