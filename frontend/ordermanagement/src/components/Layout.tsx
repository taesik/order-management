﻿import Navigation from "./Navigation";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navigation/>
            <div>
                <Outlet/>
            </div>
        </>
    );
}