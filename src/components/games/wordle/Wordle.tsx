import {useCallback, useEffect, useState} from "react";
import {IoCloseSharp} from "react-icons/io5";
import {generate} from "random-words";
import {VscDebugRestart} from "react-icons/vsc";
import { useWordChecker } from 'react-word-checker';
import WordleKeyboard from "./WordleKeyboard.tsx";


interface Props {
    handlePlayClose: () => void;
    isDarkMode: boolean;
}

const Wordle = ({handlePlayClose, isDarkMode} : Props) => {

    const [data, setData] = useState( [["", "", "", "", ""],
                                                                                        ["", "", "", "", ""],
                                                                                        ["", "", "", "", ""],
                                                                                        ["", "", "", "", ""],
                                                                                        ["", "", "", "", ""]]);
    const [word, setWord] = useState(generate({ minLength: 5, maxLength: 5 }) as string);
    const [count, setCount] = useState(0);
    const [rowNumber, setRowNumber] = useState(0);
    const [rows, setRows] = useState([false, false, false, false, false]);
    const [isWon, setIsWon] = useState(false);
    const [guessedWords, setGuessedWords] = useState<string[]>([]);
    const [wrongLetters, setWrongLetters] = useState<string[]>([]);
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [rightPlace, setRightPlace] = useState<string[]>([]);
    const [alert, setAlert] = useState(false);


    const {wordExists} = useWordChecker("en");

    const checkWinner = useCallback((index: number) => {
        return (data[index].join('') === word.toUpperCase());
    }, [data, word]);

    useEffect(() => {
        if (!isWon) {
            const handler = (e: KeyboardEvent) => {
                const key = e.key
                if (!key.match(/^[a-z]$/)) return

                if (count < 5 && rowNumber < 5) {
                    const newData = [...data];
                    newData[rowNumber][count] = key.toUpperCase();
                    setData(newData);
                    setCount(count+1);
                }
            }

            const enterHandler = (e: KeyboardEvent) => {
                if (e.key === 'Enter' && rowNumber < 5 && !data[rowNumber].includes("") && !alert) {
                    if (wordExists(data[rowNumber].join('')) && !guessedWords.includes(data[rowNumber].join(''))) {
                        setGuessedWords(currentWords => [...currentWords, data[rowNumber].join('')]);

                        for (let i = 0; i < data[rowNumber].length; i++) {
                            if (!word.toUpperCase().split("").includes(data[rowNumber][i])) {
                                setWrongLetters(currentLetters => [...currentLetters, data[rowNumber][i]]);
                            } else if (word.toUpperCase().split("")[i] === data[rowNumber][i]) {
                                if (correctLetters.includes(data[rowNumber][i])) {
                                    setCorrectLetters(correctLetters.filter(letter => letter !== data[rowNumber][i]));
                                }
                                setRightPlace(currentLetters => [...currentLetters, data[rowNumber][i]]);
                            } else {
                                if (!rightPlace.includes(data[rowNumber][i])) {
                                    setCorrectLetters(currentLetters => [...currentLetters, data[rowNumber][i]]);
                                }
                            }
                        }

                        if (checkWinner(rowNumber)) {
                            setIsWon(true);
                        }
                        setRowNumber(prevRowNumber => prevRowNumber + 1);
                        const newRows = [...rows];
                        newRows[rowNumber] = true;

                        setRows(newRows);
                        setCount(0);
                    } else {
                        setAlert(true);
                        setTimeout(() => {
                            setAlert(false);
                        }, 1000);
                    }
                }
            };

            const backspaceHandler = (e: KeyboardEvent) => {
                if (e.key === 'Backspace') {
                    if (count > 0) {
                        const newData = [...data];
                        newData[rowNumber][count-1] = "";
                        setData(newData);
                        setCount(count-1);
                    }
                }
            };

            document.addEventListener("keypress", handler);
            document.addEventListener('keydown', enterHandler);
            document.addEventListener('keydown', backspaceHandler);

            return () => {
                document.removeEventListener("keypress", handler);
                document.removeEventListener('keydown', enterHandler);
                document.removeEventListener('keydown', backspaceHandler);
            }
        }
    }, [alert, checkWinner, correctLetters, count, data, guessedWords, isWon, rightPlace, rowNumber, rows, word, wordExists]);

    const restart = () => {
        setData([["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""]]);
        setRows([false, false, false, false, false]);
        setRowNumber(0);
        setCount(0);
        setIsWon(false);
        setWord(generate({ minLength: 5, maxLength: 5 }) as string);
        setGuessedWords([]);
        setWrongLetters([]);
        setCorrectLetters([]);
        setRightPlace([]);
    }

    function handleKeyboardButtonClick(letter: string) {
        if (letter === "Backspace" && count > 0) {
            const newData = [...data];
            newData[rowNumber][count-1] = "";
            setData(newData);
            setCount(count-1);
        } else if (letter === "Enter" && rowNumber < 5 && !data[rowNumber].includes("") && !alert) {
            if (wordExists(data[rowNumber].join('')) && !guessedWords.includes(data[rowNumber].join(''))) {
                setGuessedWords(currentWords => [...currentWords, data[rowNumber].join('')]);

                for (let i = 0; i < data[rowNumber].length; i++) {
                    if (!word.toUpperCase().split("").includes(data[rowNumber][i])) {
                        setWrongLetters(currentLetters => [...currentLetters, data[rowNumber][i]]);
                    } else if (word.toUpperCase().split("")[i] === data[rowNumber][i]) {
                        if (correctLetters.includes(data[rowNumber][i])) {
                            setCorrectLetters(correctLetters.filter(letter => letter !== data[rowNumber][i]));
                        }
                        setRightPlace(currentLetters => [...currentLetters, data[rowNumber][i]]);
                    } else {
                        if (!rightPlace.includes(data[rowNumber][i])) {
                            setCorrectLetters(currentLetters => [...currentLetters, data[rowNumber][i]]);
                        }
                    }
                }

                if (checkWinner(rowNumber)) {
                    setIsWon(true);
                }
                setRowNumber(prevRowNumber => prevRowNumber + 1);
                const newRows = [...rows];
                newRows[rowNumber] = true;

                setRows(newRows);
                setCount(0);
            } else {
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 1000);
            }
        } else if (count < 5 && rowNumber < 5 && letter !== "Enter" && letter !== "Backspace") {
            const newData = [...data];
            newData[rowNumber][count] = letter.toUpperCase();
            setData(newData);
            setCount(count + 1);
        }
    }

    return (
        <div
            className={`${isDarkMode ? "bg-dark-mode" : "bg-gray-200"} shadow-2xl rounded-3xl m-1 mt-5 md:ml-28 md:mr-28 p-3 relative group`}>
            <a className="flex justify-center items-center">
                <p onClick={restart}
                   className="cursor-pointer absolute top-3 right-10 hover:-rotate-90 duration-300">
                    <VscDebugRestart size={23}/>
                </p>
                <p onClick={handlePlayClose}
                   className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                    <IoCloseSharp size={30}/>
                </p>
            </a>
            <h1 className="text-4xl font-bold text-center m-5">Wordle</h1>
            <div>
                {data.map((innerArray, outerIndex) => (
                    <div key={outerIndex} className="flex justify-center items-center">
                        {innerArray.map((value, innerIndex) => (
                            <div key={innerIndex}
                                 className={`${word.toUpperCase().split("").includes(value) && rows[outerIndex] ?
                                     (word.toUpperCase().split("")[innerIndex] === data[outerIndex][innerIndex] ?
                                         "bg-green-600" : "bg-yellow-600") : (rows[outerIndex] && "bg-gray-600")} 
                                 bg-gray-400 border-2 border-black size-20 md:size-24 rounded-xl cursor-pointer flex justify-center items-center m-[1px]`}>
                                <span className={`text-3xl font-bold text-black ${alert && outerIndex===rowNumber && "horizontal-shake"}`}>{value}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <WordleKeyboard correctLetters={correctLetters} rightPlace={rightPlace} wrongLetters={wrongLetters} handleKeyboardButtonClick={handleKeyboardButtonClick}/>

            <div  className={`${alert ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 bg-gray-500 rounded-3xl flex flex-col justify-center items-center text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] p-5`}>
                {(rowNumber < 5 && !wordExists(data[rowNumber].join('')) ? "Not such a word" : "Already tried this word")}
            </div>
            <div className={`${isWon || rowNumber === 5 ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 ${isDarkMode ? "bg-dark-mode/90" : "bg-gray-200/90"} rounded-3xl flex flex-col justify-center items-center text-center absolute inset-0 z-[100]`}>
                <span className="text-6xl font-bold p-3">{isWon ? "Winner" : "Game Over"}</span>
                <span>Word was: {word.toUpperCase()}</span>
                <div className="flex justify-center items-center">
                    <button onClick={restart} className="m-5 bg-gray-400 rounded-lg p-2">
                        <VscDebugRestart size={30}/>
                    </button>
                    <button onClick={handlePlayClose} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">
                        Exit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Wordle;