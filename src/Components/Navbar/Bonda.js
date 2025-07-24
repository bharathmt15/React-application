import React, {useEffect, useState} from "react";
import bonda from "./Tiffins/Bonda.jpg";

export default function Operations() {
    const bondaprice = 49;
    const [BondaQ, setBondaQ] = useState(1);
    const [BondaPrice, setBondaPrice] = useState(bondaprice);
    useEffect(() => {
        document.title = "One bite and she squirts flavor";
        setBondaPrice(BondaQ * bondaprice);
    }, [BondaQ]);
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
                <button
                    className="btn btn-danger me-2"
                    onClick={() => {
                        if (BondaQ > 1) {
                            setBondaQ(BondaQ - 1);
                        }
                    }}
                >
                    -
                </button>
                <button className="btn btn-success me-2">{BondaQ}</button>
                <button
                    className="btn btn-secondary me-2"
                    onClick={() => {
                        setBondaQ(BondaQ + 1);
                    }}
                >
                    +
                </button>
                <p className="price text-center">Rs: {BondaPrice}/ Plate</p>
            </div>
        </>
    );
}
