import React from "react";
import PropC2 from "./PropC2";

export default function PropC1({count}) {
    return (
        <div>
            <h2>Prop Component 1</h2>
            <PropC2 count={count} />
        </div>
    );
}
