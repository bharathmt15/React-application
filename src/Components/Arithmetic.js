import {useState} from "react";
export default function Arithmetic() {
    const [Num1, setNum1] = useState(" ");
    const [Num2, setNum2] = useState("");
    const [res, setRes] = useState("");
    return (
        <>
            <div className="my-3">
                <h3 className="text-center">Arithmetic Opeartions App</h3>
                <div className="my-3 col-2 mx-auto">
                    <div>
                        <label htmlFor="">First number:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={Num1}
                            onChange={(e) => parseInt(setNum1(e.target.value))}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Second number:</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={Num2}
                            onChange={(e) => parseInt(setNum2(e.target.value))}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Result:</label>
                        <input
                            type="tel"
                            disabled
                            className="form-control"
                            value={res}
                        />
                    </div>
                </div>
                <div className="my-4 text-center ">
                    <button
                        className="btn btn-secondary me-2"
                        onClick={() => setRes(Number(Num1) + Number(Num2))}
                    >
                        Add
                    </button>
                    <button
                        className="btn btn-warning me-2 "
                        onClick={() => setRes(Num1 - Num2)}
                    >
                        Subtract
                    </button>
                    <button
                        className="btn btn-danger me-2"
                        onClick={() => setRes(Num1 * Num2)}
                    >
                        Multiply
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => setRes(Num1 / Num2)}
                    >
                        Division
                    </button>
                </div>
            </div>
        </>
    );
}
