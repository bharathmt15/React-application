import React from "react";
import apple from "../Images/apple.jpg";
import banana from "../Images/Banana.jpg";
import mango from "../Images/mango.jpg";
import orange from "../Images/orange.jpg";
import pineapple from "../Images/pineapple.jpg";
import grapes from "../Images/grapes.jpg";
export default function Fruits() {
    const fruits = [
        {
            slno: 101,
            fruit_name: "Apple",
            fruitImage: apple,
            unit: "per/Kg",
            price: 120,
        },
        {
            slno: 102,
            fruit_name: "Banana",
            fruitImage: banana,
            unit: "Dozen",
            price: 40,
        },
        {
            slno: 103,
            fruit_name: "Mango",
            fruitImage: mango,
            unit: "per/Kg",
            price: 100,
        },
        {
            slno: 104,
            fruit_name: "Orange",
            fruitImage: orange,
            unit: "per/Kg",
            price: 80,
        },
        {
            slno: 105,
            fruit_name: "Pineapple",
            fruitImage: pineapple,
            unit: "Pcs",
            price: 90,
        },
        {
            slno: 106,
            fruit_name: "Grapes",
            fruitImage: grapes,
            unit: "per/Kg",
            price: 70,
        },
    ];
    return (
        <>
            <div className="text-center my-3 name">
                <h3>Fruits List Application</h3>
                {fruits.map((fruit) => (
                    <div key={fruit.slno} className="my-4">
                        <img
                            src={fruit.fruitImage}
                            alt={fruit.fruit_name}
                            width="250px"
                        />
                        <h4>{fruit.fruit_name}</h4>
                        <p>
                            Price: ₹{fruit.price} per {fruit.unit}
                        </p>
                        <p>Unit: {fruit.unit}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
