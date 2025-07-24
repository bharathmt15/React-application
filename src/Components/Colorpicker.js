import React, {useState, useRef} from "react";

export default function Colorpicker() {
    const [ColorChoice, setColorChoice] = useState();
    const colorBoxRef = useRef(null);

    const handleColorChange = (e) => {
        const selectedColor = e.target.value;
        setColorChoice(selectedColor);
        if (colorBoxRef.current) {
            colorBoxRef.current.style.backgroundColor = selectedColor;
        }
    };

    return (
        <>
            <div className="text-center bg-dark text-white p-4">
                <h3>Color Picker Demo using useRef Hook</h3>
            </div>
            <div
                ref={colorBoxRef}
                style={{
                    width: "250px",
                    textAlign: "center",
                    height: "150px",
                    margin: "20px auto",
                    border: "2px solid black",
                    borderRadius: "10px",
                    backgroundColor: ColorChoice,
                    transition: "background-color 0.3s ease",
                }}
            >
                <h4>Color Preview</h4>
            </div>

            <div className="text-center">
                <div>
                    <label htmlFor="colorPicker" className="text-center">
                        Select Color:
                    </label>
                </div>
                <input
                    id="colorPicker"
                    type="color"
                    value={ColorChoice}
                    onChange={handleColorChange}
                />
            </div>
        </>
    );
}
