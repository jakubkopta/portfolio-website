import {IoCloseSharp} from "react-icons/io5";
import {useState} from "react";
import {FaRegCircle} from "react-icons/fa";
import {VscDebugRestart} from "react-icons/vsc";

interface Props {
    handleClick1: () => void;
}
const TicTacToe = ({handleClick1} : Props) => {

    const [moveNumber, setMoveNumber] = useState(0);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const handleClick = (index: number = -1) => {
        if (!data[index]) {
            const newData = [...data];
            newData[index] = moveNumber % 2 === 0 ? 'O' : 'X';
            setData(newData);
            setMoveNumber(moveNumber+1);
        }
        if (checkWinner() || moveNumber > 8) {
            const newData = ["", "", "", "", "", "", "", "", ""];
            setData(newData);
            setMoveNumber(0);
        }
    }
    
    const checkWinner = () => {
        const winningCombos = [
            // Rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonals
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                return data[a];
            }
        }

        return null;
    };

    return (
        <div className="h-screen">
            <div className="bg-gray-200 shadow-2xl rounded-3xl m-5 md:m-28 relative group">
                <div
                    className={`${checkWinner() || moveNumber > 8 ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 bg-white/90 rounded-3xl flex flex-col justify-center items-center absolute inset-0 z-[100]`}>
                    {moveNumber > 8 ? (
                        <span className="text-6xl font-bold">Draw</span>
                    ) : (
                        <span className="text-6xl font-bold">Winner is {checkWinner()}</span>
                    )}

                    <div className="flex justify-center items-center">
                        <button onClick={() => handleClick()} className="m-5 bg-gray-400 rounded-lg p-2">
                            <VscDebugRestart size={30}/>
                        </button>
                        <button onClick={handleClick1} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">
                            Exit
                        </button>
                    </div>
                </div>
                <a className="flex justify-center items-center">
                    <p onClick={handleClick1}
                       className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                        <IoCloseSharp size={30}/>
                    </p>
                </a>
                <h1 className="text-3xl font-bold text-center m-5">Tic Tac Toe</h1>
                <div className="flex flex-col lg:flex-row justify-evenly items-center">
                    <span className={`text-3xl font-bold m-5 ${moveNumber % 2 === 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-300`}>Player 1</span>
                    <div className="grid grid-cols-3 gap-2 lg:m-5">
                        {data.map((value, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    className="bg-gray-400 h-28 md:h-32 w-28 md:w-32 rounded-xl cursor-pointer flex justify-center items-center">
                                    {value === 'X' ? <IoCloseSharp size={130}/> : (value === 'O' ? <FaRegCircle size={100}/> : "")}
                                </div>
                            )
                        })}
                    </div>
                    <span className={`text-3xl font-bold m-5 ${moveNumber % 2 !== 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-300`}>Player 2</span>
                </div>
            </div>
        </div>
    )
}

export default TicTacToe;