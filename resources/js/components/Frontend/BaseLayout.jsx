import React from "react";
import { CssBaseline } from "@mui/material";
import '../../../sass/frontend/styles.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

function BaseLayout({children, title}) {
    return (
        <React.Fragment>
            <CssBaseline/>

            <Header />

            {children}

            <Footer />

    </React.Fragment>
    )
}

export default BaseLayout