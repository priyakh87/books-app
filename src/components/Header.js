import React from "react";
import SearchBook from "./SearchBook";
import '../css/layout.css';
// import { Navbar } from "react-bootstrap";

function Header() {
    return (
        <div className="header-nav">
            <header className="navbar navbar-expand-lg bd-navbar sticky-top header">
            <h6 className="logo">MyBooksLibrary</h6>
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
                    
                    <SearchBook />
                    <ul>
                        <li><i class="ri-shopping-cart-fill"></i></li>
                        <li>
                        <i class="ri-user-fill"></i>
                        </li>
                    </ul>
            </nav>
            </header>
            
            
        </div>
    )
}

export default Header