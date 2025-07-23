import React, {useState} from "react";
import Child from "./Child";

export default function ParentToChild() {
    const [count, setcount] = useState(0);
    if (count < 0) {
        setcount(0);
    }
    return (
        <div className="text-center bg-dark text-white">
            <h3>Parent to Child Demo</h3>
            <h3>Cureent count : {count}</h3>
            <div>
                <button
                    className="btn btn-primary me-3"
                    onClick={() => setcount(count + 1)}
                >
                    Increase
                </button>
                <button
                    className="btn btn-secondary me-3"
                    onClick={() => setcount(0)}
                >
                    Reset
                </button>
                <button
                    className="btn btn-danger me-3"
                    onClick={() => setcount(count - 1)}
                >
                    Decrease
                </button>
            </div>
            <Child count={count} />
        </div>
    );
}
