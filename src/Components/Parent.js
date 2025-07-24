import {useState, useEffect} from "react";

export default function Parent(props) {
    const [count, setcount] = useState(0);
    if (count < 0) {
        setcount(0);
    }
    useEffect(() => {
        props.getIncremenet(count);
    });

    return (
        <>
            <div className="bg-danger mt-3">
                <h2 className="mt-2">Parent component</h2>
                <h3 className="mt-2">Current count : {count}</h3>
                <div className="mt-3">
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
                        className="btn btn-warning me-3"
                        onClick={() => setcount(count - 1)}
                    >
                        Decrease
                    </button>
                </div>
            </div>
        </>
    );
}
