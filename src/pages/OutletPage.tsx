import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.tsx";
import SideBar from "../components/side-bar/SideBar.tsx";
import {useState} from "react";

const OutletPage = () => {
    const [sideBarState, setSideBarState] = useState<boolean>(true);

    const toggleSideBar = () => {
        setSideBarState(!sideBarState);
    }

    return (
        <>
            <Header toggleSide={toggleSideBar}/>
            <SideBar state={sideBarState} />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default OutletPage;