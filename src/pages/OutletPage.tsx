import {Outlet, useNavigate} from "react-router-dom";
import SideBar from "../components/side-bar/SideBar.tsx";
import Header from "../components/header/Header.tsx";
import {useEffect, useState} from "react";
import {sessionCheck} from "../services/AuthService.ts";

const OutletPage = () => {
    const navigate = useNavigate();
    const[isOpen, setIsOpen] = useState(true);

    const selectedOpen = (state: boolean) => {
        setIsOpen(state);
    }
    
    useEffect(() => {
        async function check() {
            const isValid = await sessionCheck();
            if(!isValid) {
                navigate('/auth');
                await check();
            }
        }

        check().then(() => {navigate('/')}).catch(error => {console.log(error)});
    }, [navigate]);

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