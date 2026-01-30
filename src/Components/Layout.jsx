import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import Canvas from "./Canvas";
import "../App.css";

const Layout = () => {

    return (
        <div className="LayoutDiv">

            <div className="menubarDiv">
                <MenuBar />
            </div>

            <div className="canvasDiv">
                <Canvas />
            </div>

            <div className="outletDiv">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout;