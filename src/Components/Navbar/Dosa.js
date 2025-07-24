import React, {useEffect, useState} from "react";
import dosa from "./Tiffins/Dosa.jpg";

export default function Dosa() {
    const pricePerDosa = 29;
    const [Dquant, setDquant] = useState(1);
    const [DosaPrice, setDosaPrice] = useState(pricePerDosa);

    useEffect(() => {
        document.title =
            "Hot. Thin. Always ready to roll — just like your fantasies";
    }, []);

    useEffect(() => {
        setDosaPrice(Dquant * pricePerDosa);
    }, [Dquant]);

    return (
        <>
            <div className="foods">
                <img
                    src={dosa}
                    alt="dosa"
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
                    className="btn btn-danger ms-2"
                    onClick={() => setDquant(Dquant <= 1 ? 1 : Dquant - 1)}
                >
                    -
                </button>
                <button className="btn btn-secondary ms-2">{Dquant}</button>
                <button
                    className="btn btn-success ms-2"
                    onClick={() => setDquant(Dquant + 1)}
                >
                    +
                </button>
                <p className="mt-2 price">Rs: {DosaPrice}/-</p>
            </div>
        </>
    );
}
