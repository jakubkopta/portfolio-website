import React from "react";

interface Props {
    wrongLetters: string[];
    correctLetters: string[];
    rightPlace: string[];
    handleKeyboardButtonClick: (letter: string) => void;
}

const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Enter",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "Backspace"
];


const Keyboard = ({wrongLetters, correctLetters, rightPlace, handleKeyboardButtonClick} : Props) => {

    return (
        <div className="md:m-5 text-center">
            {keys.map((key, index) => {
                const gray = wrongLetters.includes(key)
                const yellow = correctLetters.includes(key)
                const green = rightPlace.includes(key)
                return (
                    <React.Fragment key={index}>
                        <button
                            onClick={() => handleKeyboardButtonClick(key)}
                            key={index}
                            className={`${gray ? "bg-gray-700" : (yellow ? "bg-yellow-600" : (green ? "bg-green-600" : "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"))} ${(key === "Backspace") && "md:w-24"}
                            text-white rounded-lg m-[1px] p-2 size-8 md:size-14`}
                        >
                            {key}
                        </button>
                        {key === "P" || key === "L" ? <br /> : null}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Keyboard;