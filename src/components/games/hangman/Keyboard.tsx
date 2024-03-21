import React from "react";

interface Props {
    addGuessedLetter: (letter: string) => void
    guessedLetters: string[];
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
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M"
];


const Keyboard = ({addGuessedLetter, guessedLetters} : Props) => {

    return (
        <div className="grid grid-cols-10">
            {keys.map((key, index) => {
                const isActive = guessedLetters.includes(key)
                return (
                    <React.Fragment key={index}>
                        <button
                            key={index}
                            className={`${isActive ? "bg-gray-700" : "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"} text-white rounded-lg m-[1px] p-2`}
                            onClick={() => addGuessedLetter(key)}
                            disabled = {isActive}
                        >
                            {key}
                        </button>
                        {key === "P" || key === "L" && <br/>}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Keyboard;