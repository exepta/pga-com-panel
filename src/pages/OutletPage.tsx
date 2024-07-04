import Header from "../components/header/Header.tsx";
import {Outlet} from "react-router-dom";
import SideBar from "../components/side-bar/SideBar.tsx";
import Footer from "../components/footer/Footer.tsx";

const OutletPage = () => {
    return (
        <>
            <div className={`outlet-page`}>
                <Header />
                <SideBar />
                <div className={`outlet-container`}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default OutletPage;