import {IoCloseSharp} from "react-icons/io5";
import {useCallback, useEffect, useState} from "react";
import {FaRegCircle} from "react-icons/fa";
import {VscDebugRestart} from "react-icons/vsc";

interface Props {
    handleClick1: () => void;
    isDarkMode: boolean;
}
const TicTacToe = ({handleClick1, isDarkMode} : Props) => {

    const [player1Started, setPlayer1Started] = useState(true);
    const [moveNumber, setMoveNumber] = useState(0);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const[winnerLine, setWinnerLine] = useState(-1);

    const handleClick = (index: number) => {
        if (!data[index] && !checkWinner()?.winner) {
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
        setPlayer1Started(!player1Started);
        setWinnerLine(-1);
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

        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i];
            const [a, b, c] = combo;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                return { winner: data[a], index: i };
            }
        }

        return null;
    }, [data]);

    useEffect(() => {
        const winner = checkWinner()?.winner;
        const index = checkWinner()?.index;

        if (winner && index !== undefined) {
            setWinnerLine(index);
            if ((winner === 'O' && player1Started) || (winner === 'X' && !player1Started)) {
                setPlayer1Score(prevScore => prevScore + 1);
            } else {
                setPlayer2Score(prevScore => prevScore + 1);
            }
        }
    }, [checkWinner, data, player1Started]);

    return (
            <div className={`${isDarkMode ? "bg-dark-mode" : "bg-gray-200"} shadow-2xl rounded-3xl m-1 mt-5 md:m-28 relative group`}>
                <div
                    className={`${checkWinner()?.winner || moveNumber > 8 ? "scale-100 opacity-100 delay-500" : "scale-0 opacity-0"} duration-500 ${isDarkMode ? "bg-dark-mode/90" : "bg-gray-200/90"} rounded-3xl flex flex-col justify-center items-center absolute inset-0 z-[100]`}>
                    {moveNumber > 8 && !checkWinner()?.winner ? (
                        <span className="text-6xl font-bold">Draw</span>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <span className="text-6xl font-bold text-pink-500 animate-bounce">{checkWinner()?.winner === "X" ? <IoCloseSharp size={130} className="text-pink-500"/> : <FaRegCircle size={100} className="text-blue-500"/>}</span>
                            <span className="text-6xl font-bold">{(checkWinner()?.winner === 'O' && player1Started) || (checkWinner()?.winner === 'X' && !player1Started) ? "Player 1" : "Player 2"} Win!</span>
                        </div>
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
                <h1 className="text-4xl font-bold text-center m-5">Tic Tac Toe</h1>
                <h2 className="flex justify-center gap-16 md:gap-20 text-xl font-bold text-center">Player 1<span className="font-extrabold text-2xl">{player1Score} : {player2Score}</span>   Player 2</h2>
                <div className="flex flex-col lg:flex-row justify-evenly items-center">
                    <div className={`flex lg:flex-col justify-center items-center 
                        ${!player1Started ? (moveNumber % 2 !== 0 && !checkWinner()?.winner ? "scale-100 opacity-100" : "scale-0 opacity-0") 
                        : (moveNumber % 2 === 0 && !checkWinner()?.winner ? "scale-100 opacity-100" : "scale-0 opacity-0")} duration-300`}>
                        {!player1Started ? <IoCloseSharp size={100} className="text-pink-500"/> : <FaRegCircle size={100} className="p-4 text-blue-500"/>}
                        <span className="text-3xl font-bold">Player 1</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 lg:m-5 relative">
                        <div className={`${winnerLine === 0 ? "w-full" : "w-0"} absolute top-[52px] md:top-[60px] h-[8px] bg-gray-950 duration-500`}></div>
                        <div className={`${winnerLine === 1 ? "w-full" : "w-0"} absolute top-[172px] md:top-[196px] h-[8px] bg-gray-950 duration-500`}></div>
                        <div className={`${winnerLine === 2 ? "w-full" : "w-0"} absolute bottom-[52px] md:bottom-[60px] h-[8px] bg-gray-950 duration-500`}></div>

                        <div className={`${winnerLine === 3 ? "h-full" : "h-0"} absolute left-[52px] md:left-[60px] w-[8px] bg-gray-950 duration-500`}></div>
                        <div className={`${winnerLine === 4 ? "h-full" : "h-0"} absolute left-[172px] md:left-[196px] w-[8px] bg-gray-950 duration-500`}></div>
                        <div className={`${winnerLine === 5 ? "h-full" : "h-0"} absolute right-[52px] md:right-[60px] w-[8px] bg-gray-950 duration-500`}></div>

                        <div className={`${winnerLine === 6 ? "w-[489px] md:w-[557px]" : "w-0"} absolute top-0 left-[6px] h-[8px] bg-gray-950 rotate-45 origin-top-left rounded-2xl duration-500`}></div>
                        <div className={`${winnerLine === 7 ? "w-[489px] md:w-[557px]" : "w-0"} absolute top-0 right-[6px] h-[8px] bg-gray-950 -rotate-45 origin-top-right rounded-2xl duration-500`}></div>

                        {data.map((value, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    className="bg-gray-400 h-28 md:h-32 w-28 md:w-32 rounded-xl cursor-pointer flex justify-center items-center">
                                    {value === 'X' ? <IoCloseSharp size={130} className="text-pink-500"/> : (value === 'O' ? <FaRegCircle size={130} className="p-4 text-blue-500"/> : "")}
                                </div>
                            )
                        })}
                    </div>
                    <div className={`flex lg:flex-col justify-center items-center 
                        ${player1Started ? (moveNumber % 2 !== 0 && !checkWinner()?.winner ? "scale-100 opacity-100" : "scale-0 opacity-0") 
                        : (moveNumber % 2 === 0 && !checkWinner()?.winner ? "scale-100 opacity-100" : "scale-0 opacity-0")} duration-300`}>
                        {player1Started ? <IoCloseSharp size={100} className="text-pink-500"/> : <FaRegCircle size={100} className="p-4 text-blue-500"/>}
                        <span className="text-3xl font-bold">Player 2</span>
                    </div>
                </div>
            </div>
    )
}

export default TicTacToe;