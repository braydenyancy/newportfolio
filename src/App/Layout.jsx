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
            <div className="canvasDiv">
                <Canvas />
            </div>

            <div className="menubarDiv" style={{
                backgroundColor: colors.darkcyan,
                borderBottom: `solid 1px ${colors.cream}`,
                color: colors.seafoam
            }}>
                <MenuBar />
            </div>

            <div className="outletDiv" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                opacity: 0,
            }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;