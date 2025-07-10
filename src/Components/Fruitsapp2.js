import React from "react";
import apple from "../Images/apple.jpg";
import banana from "../Images/Banana.jpg";
import mango from "../Images/mango.jpg";
import orange from "../Images/orange.jpg";
import pineapple from "../Images/pineapple.jpg";
import grapes from "../Images/grapes.jpg";
import Fruitcard from "./Fruitcard";
export default function Fruitsapp2(props) {
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
            <div className="text-center">
                <h3 className="my-3">Fruits App using props demo</h3>
                {fruits.map((fruit) => (
                    <Fruitcard fruit={fruit} key={fruit.slno} />
                ))}
            </div>
        </>
    );
}
