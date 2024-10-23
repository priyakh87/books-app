import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import BookRoutes from "./BookRoutes";
import Footer from "./Footer";

export default function Layout() {

    return <>
        <Header />
        <Nav />
        <BookRoutes />
        <Footer />
    </>
}