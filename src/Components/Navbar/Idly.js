import idly from "./Tiffins/Idly.jpg";
import "./Style.css";
export default function Home() {
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
                <button className="btn btn-secondary ms-2">Add To Cart</button>
            </div>
        </>
    );
}
