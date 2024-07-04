import { FaBars } from "react-icons/fa6";

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

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;