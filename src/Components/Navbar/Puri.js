import puri from "./Tiffins/Puri.jpg";
import {useEffect, useState} from "react";
export default function Puri() {
    const puriprice = 29;
    const [PuriQuant, setPuriQuant] = useState(1);
    const [Puriprice, setPuriprice] = useState(puriprice);
    useEffect(() => {
        document.title = "Press her's gently, and she moans out steam";
        setPuriprice(PuriQuant * puriprice);
    }, [PuriQuant]);
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
                <button
                    className="btn btn-danger me-2"
                    onClick={() => {
                        if (PuriQuant > 1) {
                            setPuriQuant(PuriQuant - 1);
                        }
                    }}
                >
                    -
                </button>
                <button className="btn btn-secondary me-2">{PuriQuant}</button>
                <button
                    className="btn btn-success me-2"
                    onClick={() => {
                        setPuriQuant(PuriQuant + 1);
                    }}
                >
                    +
                </button>
                <p className="mt-2 price">Rs: {Puriprice}</p>
            </div>
        </>
    );
}
