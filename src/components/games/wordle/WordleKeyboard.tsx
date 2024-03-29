import React from "react";
import {AiOutlineEnter} from "react-icons/ai";
import {IoBackspaceOutline} from "react-icons/io5";

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
        <div className="grid grid-cols-10 mt-3">
            {keys.map((key, index) => {
                const gray = wrongLetters.includes(key)
                const yellow = correctLetters.includes(key)
                const green = rightPlace.includes(key)
                return (
                    <React.Fragment key={index}>
                        <button
                            onClick={() => handleKeyboardButtonClick(key)}
                            key={index}
                            className={`${gray ? "bg-gray-700" : (yellow ? "bg-yellow-600" : (green ? "bg-green-600" : "bg-gray-500 hover:bg-gray-600 active:bg-gray-700"))}
                            text-white rounded-lg m-[1px] p-2 ${key === "Backspace" && 'col-span-2'}`}
                        >
                            {
                                key === "Enter" || key === "Backspace" ?
                                (key === "Enter" ?
                                    <span className="flex justify-center items-center gap-2 "><span className="hidden md:block">{key}</span> <AiOutlineEnter/></span> :
                                    <span className="flex justify-center items-center gap-2"><span className="hidden md:block">{key}</span><IoBackspaceOutline size={23}/></span>)
                                : key
                            }
                        </button>
                        {key === "P" || key === "L" && <br />}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Keyboard;