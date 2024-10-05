import React from "react";
import SearchBook from "./SearchBook";
// import { Navbar } from "react-bootstrap";

function Header() {
    return (
        <div className="mt-5">
            <header className="navbar navbar-expand-lg bd-navbar sticky-top">
            <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
            <SearchBook />
            </nav>
            </header>
            
            
        </div>
    )
}

export default Header