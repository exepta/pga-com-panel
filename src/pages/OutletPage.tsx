import {Outlet} from "react-router-dom";
import SideBar from "../components/side-bar/SideBar.tsx";

const OutletPage = () => {

    return (
        <>
            <SideBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default OutletPage;