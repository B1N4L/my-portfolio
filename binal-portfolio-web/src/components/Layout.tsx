//import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import hudLine from "../assets/hud-line.svg";
import Navbar from "./Navbar.tsx";
import Header from "./Header.tsx";
import Projects from "./Projects.tsx";
import AboutMe from "./AboutMe.tsx";

const Layout = () => {
    return (
        // make the root fill the viewport and use column flex so main can grow
        <div className="h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="relative flex-1 overflow-auto p-10">
                {/* TODO: integrate with react router later like this*/}
                {/*<Outlet />*/}
                <Header />
                <AboutMe/>
                <Projects />
            </main>

            <Footer />

            {/* Fixed HUD overlay decoration*/}
            <div className="pointer-events-none my-8 fixed inset-0 z-50">
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