import logo from "../Images/logo192.png";
import {useState} from "react";
export default function Home() {
    const [Count, setCount] = useState(0);
    return (
        <>
            <div className="container">
                <p>Hey this is a basic react application</p>
            </div>
            <div className="log">
                <img src={logo} alt="none" />
            </div>
            <div className="Count">
                <p>Counter {Count}</p>
            </div>
            <div className="inc">
                <button onClick={() => setCount(Count + 1)}>Increase</button>
                <button onClick={() => setCount(Count - 1)}>Decrease</button>
                <button onClick={() => setCount(Count === 0)}>reset</button>
            </div>
        </>
    );
}
