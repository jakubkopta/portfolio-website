import {IoCloseSharp, IoPlayOutline} from "react-icons/io5";
import {VscDebugRestart} from "react-icons/vsc";
import {useEffect, useState} from "react";
import Timer from "./Timer.tsx";

interface Props {
    handlePlayClose: () => void;
    isDarkMode: boolean;
}

const Puzzle = ({handlePlayClose, isDarkMode} : Props) => {

    const [data, setData] = useState(["", "1", "2", "3", "4", "5", "6", "7", "8"]);
    const [stoppedTime, setStoppedTime] = useState("0");
    const [highestScore, setHighestScore] = useState(stoppedTime);

    const [rerender, setRerender] = useState(false);
    const [isStarted, setIsStarted] = useState(false);

    const switchPossibilities = [
        [1, 3],
        [0, 2, 4],
        [1, 5],

        [0, 4, 6],
        [1, 3, 5, 7],
        [2, 4, 8],

        [3, 7],
        [4, 6, 8],
        [5, 7]
    ];

    const swapElements = (index1: number, index2: number) => {
        const newArray = [...data];
        [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];

        return newArray;
    };

    function countMisplacedNumbers(array: string[]) {
        return array.filter((num, index) => num !== '' && parseInt(num) !== index).length;
    }

    function hasIncreasingOrder(array: string[]) {
        for (let i = 0; i < array.length - 1; i++) {
            if (parseInt(array[i]) + 1 === parseInt(array[i + 1])) {
                return true;
            }
        }
        return false;
    }

    function shuffleArray(array: string[]) {

        const oldArray = [...array];

        do {
            for (let i = 0; i < array.length; i++) {
                const emptyIndex = array.indexOf('');
                const neighbours = switchPossibilities[emptyIndex];
                const randomNeighbour = neighbours[Math.floor(Math.random() * neighbours.length)];
                [array[emptyIndex], array[randomNeighbour]] = [array[randomNeighbour], array[emptyIndex]];
            }
        } while (array.join() === ["", "1", "2", "3", "4", "5", "6", "7", "8"].join() ||
        array.join() === oldArray.join() ||
        countMisplacedNumbers(array) < array.length/2 ||
        hasIncreasingOrder(array));

        return array;
    }

    const handleShuffle = () => {
        const shuffledData = shuffleArray(data);
        setData(shuffledData);
        setIsStarted(false);
        setRerender(!rerender);
    };

    const handleSwitch = (index: number) => {
        for (const switchPossibilityElement of switchPossibilities[index]) {
            if (data[switchPossibilityElement] === "") {
                setData(swapElements(index, switchPossibilityElement));
            }
        }
    };

    const checkWinner = () => {
        if (data.every((value, index) => value === ["", "1", "2", "3", "4", "5", "6", "7", "8"][index])) {
            return true;
        }
    }

    useEffect(() => {
    }, [data, rerender]);

    return (
        <div className={`${isDarkMode ? "bg-dark-mode" : "bg-gray-200"} shadow-2xl rounded-3xl m-1 mt-5 md:m-28 pb-10 relative`}>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center m-5">Puzzle</h1>
                <Timer isStarted={isStarted} checkWinner={checkWinner()} stoppedTime={stoppedTime} setStoppedTime={setStoppedTime} highestScore={highestScore} setHighestScore={setHighestScore}/>
            </div>
                <h2 className="absolute top-3 left-3 text-center">Highest Score:<br/>{highestScore}</h2>

            <div className="flex justify-evenly items-center">
                <div className="grid grid-cols-3 m-5">
                    {data.map((value, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleSwitch(index)}
                                className="bg-gray-400 border-2 border-black h-28 md:h-32 w-28 md:w-32 rounded-xl cursor-pointer flex justify-center items-center">
                                <span className={`transform ${value ? "opacity-100" : "opacity-0"} 
                                text-dark-mode
                                flex justify-center items-center
                                bg-gray-300 rounded-xl h-[90%] w-[90%] duration-300 text-2xl font-bold`}>{value}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div
                className={`${checkWinner() && isStarted ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 ${isDarkMode ? "bg-dark-mode/90" : "bg-gray-200/90"} rounded-3xl flex flex-col justify-center items-center text-center absolute inset-0 z-[100]`}>
                <span className="text-6xl font-bold p-3">Winner</span>
                Your Time: {stoppedTime}
                <br/>Highest Score: {highestScore}
                <div className="flex justify-center items-center">
                    <button onClick={() => {
                        setIsStarted(false);
                        setData(["", "1", "2", "3", "4", "5", "6", "7", "8"]);
                    }} className="m-5 bg-gray-400 rounded-lg p-2">
                        <VscDebugRestart size={30}/>
                    </button>
                    <button onClick={() => {
                        handlePlayClose();
                        setIsStarted(false);
                        setData(["", "1", "2", "3", "4", "5", "6", "7", "8"]);
                    }} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">
                        Exit
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className={`${isStarted ? "scale-0 opacity-0" : "scale-100 opacity-100"} duration-300 
                   flex justify-start items-start size-[21rem] md:size-96 bg-white/60 top-[124px] right-1/2 translate-x-1/2 rounded-xl cursor-pointer absolute`}>
                    <div onClick={() => {
                        handleShuffle();
                        setIsStarted(true);
                    }}
                         className={`flex justify-center items-center border-4 border-black size-28 md:size-32 duration-300 rounded-xl group`}>
                        <p className="group-hover:scale-110 text-black"><IoPlayOutline size={70}/></p>
                    </div>
                </div>
                <p onClick={() => {
                    setIsStarted(false);
                    setData(["", "1", "2", "3", "4", "5", "6", "7", "8"]);
                }}
                   className="cursor-pointer absolute top-3 right-10 hover:-rotate-90 duration-300">
                    <VscDebugRestart size={23}/>
                </p>
                <p onClick={() => {
                    handlePlayClose();
                    setIsStarted(false);
                    setData(["", "1", "2", "3", "4", "5", "6", "7", "8"]);
                }}
                   className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                    <IoCloseSharp size={30}/>
                </p>
            </div>
        </div>
    )
}

export default Puzzle;