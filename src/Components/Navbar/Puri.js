import React from "react";
import puri from "./Tiffins/Puri.jpg";
import {useEffect} from "react";
export default function Puri() {
    useEffect(() => {
        return () => {
            document.title = "Press her's gently, and she moans out steam";
        };
    }, []);
    return (
        <>
            <div className="foods">
                <img
                    src={puri}
                    alt=""
                    style={{
                        width: "350px",
                        height: "350px",
                        objectFit: "cover",

                        transition: "transform 0.3s ease",
                    }}
                />
            </div>
            <div className="text-center">
                <button className="btn btn-primary me-2">Order now</button>
                <button className="btn btn-secondary ms-2">Add To Cart</button>
            </div>
        </>
    );
}
