import React from "react";
import dosa from "./Tiffins/Dosa.jpg";
export default function Dosa() {
    return (
        <>
            <div className="foods">
                <img
                    src={dosa}
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
