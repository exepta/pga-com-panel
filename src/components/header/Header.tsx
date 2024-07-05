import { FaBars } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

import "./Header.css"
import SearchBar from "../search-bar/SearchBar.tsx";

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
                        <SearchBar searchIcon={<IoMdSearch />} className={`header-search`} />
                    </div>

                    <div className={`right`}>
                        <div className={`tool-box`}>
                            <FaBell className={`icon`}/>
                        </div>

                        <div className={`user-box`}>
                            <div className={`avatar-cycle`}>
                                <img className={`avatar`} src="/src/assets/images/gantar.jpg" alt="user-avatar"/>
                            </div>

                            <div className={`user-text`}>
                                <span className={`u-name`}>Exepta</span>
                                <span className={`u-role`}>Administrator</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;