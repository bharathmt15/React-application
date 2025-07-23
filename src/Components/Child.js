import React from "react";

export default function Child({count = 5}) {
    return (
        <div className="bg-danger mt-3">
            <h3>Child component</h3>
            <h3>{count}</h3>
        </div>
    );
}
