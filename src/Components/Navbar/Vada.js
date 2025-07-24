import React, {useEffect, useState} from "react";
import vada from "./Tiffins/Vada.jpg";

export default function Vada() {
    const vadaprice = 49;
    const [VadaQuant, setVadaQuant] = useState(1);
    const [VadaPrice, setVadaPrice] = useState(vadaprice);
    useEffect(() => {
        document.title =
            "She's got a hole, she's hot, and she's ready to get dipped";
        setVadaPrice(VadaQuant * vadaprice);
    }, [VadaQuant]);
    return (
        <>
            <div className="foods">
                <img
                    src={vada}
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
                <button
                    className="btn btn-danger me-2"
                    onClick={() => {
                        if (VadaQuant > 1) {
                            setVadaQuant(VadaQuant - 1);
                        }
                    }}
                >
                    -
                </button>
                <button className="btn btn-secondary me-2">{VadaQuant}</button>
                <button
                    className="btn btn-success me-2"
                    onClick={() => {
                        setVadaQuant(VadaQuant + 1);
                    }}
                >
                    +
                </button>
                <p className="mt-2 price">Rs: {VadaPrice}/-</p>
            </div>
        </>
    );
}
