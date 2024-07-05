import React from "react";
import "./SearchBar.css";

interface Props {
    searchIcon?: React.ReactNode;
    className?: string;
    placeholder?: string;
}

const SearchBar = ({ className, searchIcon, placeholder } :Props) => {
    if(placeholder === undefined) placeholder = "Search...";
    return (
        <>
            <div className={`search-bar-container ${className}`}>
                <div className={`s-icon-con`}>
                    {searchIcon}
                </div>
                <input type="search" placeholder={placeholder} className={`search-input`} />
            </div>
        </>
    )
}

export default SearchBar;