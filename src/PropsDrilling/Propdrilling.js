import {useState} from "react";
import PropC1 from "./PropC1";

export default function Propdrilling(props) {
    let [Count, setCount] = useState(0);
    if (Count < 0) {
        setCount(0);
    }
    return (
        <>
            <div className="text-center mt-3">
                <h2>Prop Drilling</h2>

                <div className="text-center my-4">
                    <PropC1 />
                    <h3>Counter application re-rendering demo</h3>
                    <div className="text-dark my-3">
                        <p className="h4">Counter {Count}</p>
                    </div>
                    <div>
                        <button
                            onClick={() => setCount(Count + 1)}
                            className="btn btn-primary me-3"
                        >
                            Increase
                        </button>
                        <button
                            onClick={() => setCount(0)}
                            className="btn btn-primary me-3"
                        >
                            Reset
                        </button>
                        <button
                            onClick={() => setCount(Count - 1)}
                            className="btn btn-primary me-3"
                        >
                            Decrease
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
