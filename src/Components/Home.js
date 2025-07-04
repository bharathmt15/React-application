import React from "react";
import logo from "../Images/logo192.png";
export default function Home() {
    return (
        <>
            <div className="container">
                <p>Hey this is a basic react application</p>
            </div>
            <div className="log">
                <img src={logo} alt="none" />
            </div>
        </>
    );
}
