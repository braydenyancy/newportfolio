import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import Canvas from "./Canvas";
import { colors } from "../assets/colors";
import "../App.css";

const Layout = () => {

    return (
        <div className="LayoutDiv" style={{
            backgroundColor: colors.darkcyan
        }}>

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