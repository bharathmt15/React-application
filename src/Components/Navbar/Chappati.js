import React from "react";
import roti from "./Tiffins/Roti.jpg";
export default function More() {
    return (
        <>
            <div className="foods">
                <img
                    src={roti}
                    alt=""
                    style={{
                        width: "350px",
                        height: "350px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                        borderRadius: "12px",
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
