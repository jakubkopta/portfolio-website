import {IoCloseSharp} from "react-icons/io5";
import {useCallback, useEffect, useState} from "react";
import {FaRegCircle} from "react-icons/fa";
import {VscDebugRestart} from "react-icons/vsc";

interface Props {
    handleClick1: () => void;
}
const TicTacToe = ({handleClick1} : Props) => {

    const [moveNumber, setMoveNumber] = useState(0);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);

    const handleClick = (index: number) => {
        if (!data[index]) {
            const newData = [...data];
            newData[index] = moveNumber % 2 === 0 ? 'O' : 'X';
            setData(newData);
            setMoveNumber(moveNumber+1);
        }
    }

    const restart = () => {
        const newData = ["", "", "", "", "", "", "", "", ""];
        setData(newData);
        setMoveNumber(0);
    }
    const restartScore = () => {
        setPlayer1Score(0);
        setPlayer2Score(0);
    }

    const checkWinner = useCallback(() => {
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
    }, [data]);

    useEffect(() => {
        const winner = checkWinner();
        if (winner) {
            if (winner === 'O') {
                setPlayer1Score(prevScore => prevScore + 1);
            } else {
                setPlayer2Score(prevScore => prevScore + 1);
            }
        }
    }, [checkWinner, data]);

    return (
            <div className="bg-gray-200 shadow-2xl rounded-3xl m-1 mt-5 md:m-28 relative group">
                <div
                    className={`${checkWinner() || moveNumber > 8 ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 bg-white/90 rounded-3xl flex flex-col justify-center items-center absolute inset-0 z-[100]`}>
                    {moveNumber > 8 ? (
                        <span className="text-6xl font-bold">Draw</span>
                    ) : (
                        <span className="text-6xl font-bold">Winner is {checkWinner()}</span>
                    )}

                    <div className="flex justify-center items-center">
                        <button onClick={restart} className="m-5 bg-gray-400 rounded-lg p-2">
                            <VscDebugRestart size={30}/>
                        </button>
                        <button onClick={handleClick1} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">
                            Exit
                        </button>
                    </div>
                </div>
                <a className="flex justify-center items-center">
                    <p onClick={() => {
                        restart();
                        restartScore();
                    }}
                       className="cursor-pointer absolute top-3 right-10 hover:-rotate-90 duration-300">
                        <VscDebugRestart size={23}/>
                    </p>
                    <p onClick={handleClick1}
                       className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                        <IoCloseSharp size={30}/>
                    </p>
                </a>
                <h1 className="text-3xl font-bold text-center m-5">Tic Tac Toe</h1>
                <h2 className="text-xl font-bold text-center">Score: {player1Score} : {player2Score}</h2>
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
    )
}

export default TicTacToe;