import idly from "./Tiffins/Idly.jpg";
import "./Style.css";
import {useState} from "react";

export default function Home() {
    const [no, setNo] = useState(1);
    const [Price] = useState("49/-");
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
                    className="btn btn-danger ms-2"
                    onClick={() => {
                        setNo(no <= 1 ? 1 : no - 1);
                    }}
                >
                    -
                </button>
                <button className="btn btn-secondary ms-2">{no}</button>
                <button
                    className="btn btn-success ms-2"
                    onClick={() => {
                        setNo(no + 1);
                    }}
                >
                    +
                </button>
                <p className="mt-2 price">Rs {Price}</p>
            </div>
        </>
    );
}
