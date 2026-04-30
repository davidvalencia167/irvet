import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


function MainLayout() {
  return (
    <div className="layout">
        <Navbar />
        <main className="main-content">
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default MainLayout;