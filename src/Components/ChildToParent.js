import Parent from "./Parent";
import {useState} from "react";
export default function ChildToParent() {
    const [Pcount, setPcount] = useState(0);
    const getIncremenet = (count) => {
        setPcount(count);
    };
    return (
        <>
            <div className="text-center bg-dark text-white">
                <h3>Child to parent Props Demo</h3>
                <div>
                    <h3>Current count is {Pcount}</h3>
                </div>
                <Parent getIncremenet={getIncremenet} />
            </div>
        </>
    );
}
