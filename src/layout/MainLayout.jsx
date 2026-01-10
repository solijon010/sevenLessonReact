import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="grow py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
