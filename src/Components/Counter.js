import {useState, useEffect} from "react";
export default function Counter() {
    let [Count, setCount] = useState(0);
    if (Count < 0) {
        setCount(0);
    }
    useEffect(() => {
        console.log(Count);
    }, [Count]);

    if (Count < 0) {
        setCount(0);
    }
    return (
        <div className="text-center my-4">
            <h3>Counter application re rendering demo</h3>
            <div className="text-dark my-3">
                <p className="h4">Counter {Count}</p>
            </div>
            <div>
                <button
                    onClick={() => {
                        setCount(Count + 1);
                    }}
                    className="btn btn-primary me-3"
                >
                    Increase
                </button>
                <button
                    onClick={() => {
                        setCount(Count - 1);
                    }}
                    className="btn btn-primary me-3"
                >
                    Decrease
                </button>
                <button
                    onClick={() => setCount(0)}
                    className="btn btn-primary me-3"
                >
                    reset
                </button>
            </div>
        </div>
    );
}
