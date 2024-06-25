import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RandomColor() {
    const [typeofColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (max) => Math.floor(Math.random() * max);

    const handleClickRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        setColor(hexColor);
    };

    const handleClickRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    };

    useEffect(() => {
        typeofColor === "hex"
            ? handleClickRandomHexColor()
            : handleClickRandomRgbColor();
    }, [typeofColor]);

    return (

        <div
            className="d-flex flex-column justify-content-center align-items-center vh-100"
            style={{ backgroundColor: color }}
        >

            <div className="d-flex justify-content-center mb-4">

                <button
                    onClick={() => setTypeOfColor("hex")}
                    type="button"
                    className="btn btn-danger mx-2"
                >
                    Create Hex Color
                </button>

                <button
                    onClick={() => setTypeOfColor("rgb")}
                    type="button"
                    className="btn btn-warning mx-2"
                >
                    Create Rgb Color
                </button>


                <button
                    onClick={() => {
                        typeofColor === "hex"
                            ? handleClickRandomHexColor()
                            : handleClickRandomRgbColor();
                    }}
                    type="button"
                    className="btn btn-info mx-2"
                >
                    Create Random Color
                </button>


            </div>

            <div className="text-center">
                <h3>{typeofColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}
