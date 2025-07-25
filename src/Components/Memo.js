import React, {useState} from "react";

export default function Memo() {
    const [Iby1, setIby1] = useState(0);
    const [Iby2, setIby2] = useState(0);
    const [Iby5, setIby5] = useState(0);
    return (
        <>
            <div className="text-center bg-dark text-white p-3">
                <h4>Rerendring of child components Issue fixing with Memo</h4>
                <h3>Increment of 1: {Iby1}</h3>
                <h3>Increment of 2: {Iby2}</h3>
                <h3>Increment of 5: {Iby5}</h3>
                <div className="text-center mt-4">
                    <button
                        className="btn btn-warning me-2"
                        onClick={() => {
                            setIby1(Iby1 + 1);
                        }}
                    >
                        Increment by 1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => {
                            setIby2(Iby2 + 2);
                        }}
                    >
                        Increment By 2
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            setIby5(Iby5 + 5);
                        }}
                    >
                        Increment By 5
                    </button>
                </div>
            </div>
        </>
    );
}
