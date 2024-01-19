import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = () => {
  return (
    <div className="bg-[#FFF7ED]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
