import {useState} from "react";
export default function Counter() {
    let [Count, setCount] = useState(1);
    if (Count < 1) {
        setCount(1);
    }
    return (
        <div className="text-center my-4">
            <h3>Counter application re rendering demo</h3>
            <div className="text-dark my-3">
                <p className="h4">Counter {Count}</p>
            </div>
            <div>
                <button onClick={() => setCount(Count + 1)}>Increase</button>
                <button onClick={() => setCount(Count - 1)}>Decrease</button>
                <button onClick={() => setCount(0)}>reset</button>
            </div>
        </div>
    );
}
