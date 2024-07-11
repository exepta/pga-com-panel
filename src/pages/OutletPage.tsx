import {Outlet} from "react-router-dom";
import Header from "../components/header/Header.tsx";

const OutletPage = () => {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default OutletPage;