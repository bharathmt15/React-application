import React, {useEffect, useState} from "react";
import roti from "./Tiffins/Roti.jpg";
export default function More() {
    const chapathiprice = 49;
    const [ChapathiPrice, setChapathiPrice] = useState(chapathiprice);
    const [ChapQ, setChapQ] = useState(1);
    useEffect(() => {
        document.title = "Spread her P wide — she loves the heat";
        setChapathiPrice(chapathiprice * ChapQ);
    }, [ChapQ]);
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
                <button
                    className="btn btn-danger me-2"
                    onClick={() => {
                        if (ChapQ > 1) {
                            setChapQ(ChapQ - 1);
                        }
                    }}
                >
                    -
                </button>
                <button className="btn btn-secondary me-2">{ChapQ}</button>
                <button
                    className="btn btn-success me-2"
                    onClick={() => {
                        setChapQ(ChapQ + 1);
                    }}
                >
                    +
                </button>
                <p className="price">Rs: {ChapathiPrice}/-</p>
            </div>
        </>
    );
}
