import React, { useState } from 'react'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const randomHexColor = () => {
        const rab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

        const rand = Math.floor(Math.random() * 10)
        console.log(rand);
        for (let i = 0; i < 6; i++) {
            let hexColor = "#";
            // hexColor 

        }

    }
    const randomRgbColor = () => {

    }
    return (
        <div>
            <div className='h-screen w-[100vw] bg-blue-500' >
                <div className='flex justify-center gap-12 text-lg font-bold '>
                    <button onClick={() => { randomHexColor() }} className='border capitalize mx-2 px-5 py-2 rounded-lg bg-white shadow-lg' >generate hex</button>
                    <button onClick={() => { randomRgbColor() }} className='border capitalize mx-2 px-5 py-2 rounded-lg bg-white shadow-lg' >generate rgb</button>
                    <button onClick={typeOfColor === "hex" ? randomHexColor() : randomRgbColor()} className='border capitalize mx-2 px-5 py-2 rounded-lg bg-white shadow-lg' >generate new color</button>
                </div>
            </div>
        </div >
    )
}

export default RandomColor