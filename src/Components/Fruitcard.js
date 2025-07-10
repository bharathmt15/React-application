import React from "react";
export default function Fruitcard(props) {
    const {fruit} = props;

    return (
        <>
            <div className="col-6 mx-auto">
                <img
                    src={fruit.fruitImage}
                    alt={fruit.fruit_name}
                    style={{
                        width: "250px",
                        height: "250px",
                        objectFit: "cover",
                    }}
                />
                <h3>{fruit.fruit_name}</h3>
                <div className="text-bold h4 units">
                    <p>unit: {fruit.price}/Kg</p>
                </div>
            </div>
        </>
    );
}
