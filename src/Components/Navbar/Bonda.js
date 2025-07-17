import React from "react";
import bonda from "./Tiffins/Bonda.jpg";
export default function Operations() {
    return (
        <>
            <div className="foods">
                <img
                    src={bonda}
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
