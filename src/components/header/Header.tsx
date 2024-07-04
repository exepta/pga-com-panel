import { FaBars } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";

import "./Header.css"

const Header = () => {
    return (
        <>
            <header>
                <div className={`header-container`}>
                    <div className={`left`}>
                        <div className={`side-bar-btn`}>
                            <FaBars className={`icon`}/>
                        </div>
                    </div>

                    <div className={`middle`}>

                    </div>

                    <div className={`right`}>
                        <div className={`tool-box`}>
                            <FaBell className={`icon`}/>
                        </div>

                        <div className={`avatar-cycle`}>
                            <img className={`avatar`} src="/src/assets/images/gantar.jpg" alt="user-avatar"/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;