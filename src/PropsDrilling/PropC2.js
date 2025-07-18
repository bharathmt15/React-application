import React from "react";
import PropC3 from "./PropC3";

export default function PropC2({count}) {
    return (
        <div>
            <h2>Prop Component 2</h2>
            <PropC3 count={count} />
        </div>
    );
}
