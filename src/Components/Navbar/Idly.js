import idly from "./Tiffins/Idly.jpg";
import "./Style.css";
import {useState, useEffect} from "react";

export default function Home() {
    const pricePerItem = 49;
    const [no, setNo] = useState(1);
    const [totalPrice, setTotalPrice] = useState(pricePerItem);

    useEffect(() => {
        document.title = "Soft, white, and ready to make you cum for more";
        setTotalPrice(no * pricePerItem);
    }, [no]);

    return (
        <>
            <div className="foods">
                <div>
                    <img
                        src={idly}
                        alt="idly"
                        style={{
                            width: "350px",
                            height: "350px",
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                        }}
                    />
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary me-2">Order now</button>
                <button
                    className="btn btn-danger me-2"
                    onClick={() => setNo(no <= 1 ? 1 : no - 1)}
                >
                    -
                </button>
                <button className="btn btn-secondary me-2">{no}</button>
                <button
                    className="btn btn-success me-2"
                    onClick={() => setNo(no + 1)}
                >
                    +
                </button>
                <p className="mt-2 price">Rs: {totalPrice}/Plate</p>
            </div>
        </>
    );
}
