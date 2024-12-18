import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = () => {

  return (
    <div>
      <div className="h-16 ">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-220px)] p-14 mx-auto px-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;