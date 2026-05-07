import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import hudLine from "../assets/hud-line.svg";
import Navbar from "./Navbar.tsx";

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="relative">
                <Outlet />
            </main>

            <Footer />

            {/* HUD overlay */}
            <div className="pointer-events-none fixed inset-0 z-50">
                <img
                    src={hudLine}
                    alt=""
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-[220px] w-auto"
                />
                <img
                    src={hudLine}
                    alt=""
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-[220px] w-auto scale-x-[-1]"
                />
                <img
                    src={hudLine}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[220px] w-auto scale-y-[-1]"
                />
                <img
                    src={hudLine}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-0 right-0 h-[220px] w-auto scale-x-[-1] scale-y-[-1]"
                />
            </div>
        </div>
    );
};

export default Layout;