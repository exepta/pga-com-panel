import {Outlet} from "react-router-dom";
import SideBar from "../components/side-bar/SideBar.tsx";
import Header from "../components/header/Header.tsx";
import {useState} from "react";

const OutletPage = () => {

    const[isOpen, setIsOpen] = useState(true);

    const selectedOpen = (state: boolean) => {
        setIsOpen(state);
    }

    return (
        <>
            <Header extended={isOpen} />
            <SideBar externalOpenState={selectedOpen}/>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default OutletPage;