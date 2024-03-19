import {useEffect, useState} from "react";
import {IoCloseSharp} from "react-icons/io5";
import {generate} from "random-words";
import {VscDebugRestart} from "react-icons/vsc";

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

    useEffect(() => {
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
            if (e.key === 'Enter' && rowNumber < 5) {
                if (!data[rowNumber].includes("")) {
                    setRowNumber(prevRowNumber => prevRowNumber + 1);
                    const newRows = [...rows];
                    newRows[rowNumber] = true;

                    setRows(newRows);
                    setCount(0);
                }
            }
        };

        const backspaceHandler = (e: KeyboardEvent) => {
            if (e.key === 'Backspace') {
                if (count >= 0) {
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
    }, [count, data, rowNumber, rows]);

    const restart = () => {
        setData([["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""]]);
        setRows([false, false, false, false, false]);
        setRowNumber(0);
        setCount(0);
        setWord(generate({ minLength: 5, maxLength: 5 }) as string);
    }

    console.log(word)

    return (
        <div
            className={`${isDarkMode ? "bg-dark-mode" : "bg-gray-200"} shadow-2xl rounded-3xl m-5 md:ml-28 md:mr-28 p-3 relative group`}>
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
            <div className="">
                {data.map((innerArray, outerIndex) => (
                    <div key={outerIndex} className="flex">
                        {innerArray.map((value, innerIndex) => (
                            <div key={innerIndex} className={`${word.toUpperCase().split("").includes(value) && rows[outerIndex] ? (word.toUpperCase().split("")[innerIndex] === data[outerIndex][innerIndex] ? "bg-green-600" : "bg-yellow-600") : (rows[outerIndex] && "bg-gray-600")} bg-gray-400 h-28 md:h-32 w-28 md:w-32 rounded-xl cursor-pointer flex justify-center items-center`}>
                                {value}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wordle;