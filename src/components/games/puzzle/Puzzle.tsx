import {IoCloseSharp} from "react-icons/io5";
import {VscDebugRestart} from "react-icons/vsc";
import {useEffect, useState} from "react";

interface Props {
    handleClick1: () => void;
}

const Puzzle = ({handleClick1} : Props) => {

    const [data, setData] = useState(shuffleArray(["", "1", "2", "3", "4", "5", "6", "7", "8"]));
    const [rerender, setRerender] = useState(false);


    const swapElements = (index1: number, index2: number) => {
        const newArray = [...data]; // Create a shallow copy of the original array
        [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
        return newArray; // Return the new array with swapped elements
    };

    function shuffleArray(array: string[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const handleShuffle = () => {
        const shuffledData = shuffleArray(data);
        setData(shuffledData);
        setRerender(!rerender);
    };
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
        <div className="bg-gray-200 shadow-2xl rounded-3xl m-1 mt-5 md:m-28 pb-10 relative group">
            <div
                className={`${checkWinner() ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 bg-white/90 rounded-3xl flex flex-col justify-center items-center absolute inset-0 z-[100]`}>
                <span className="text-6xl font-bold">Winner</span>
                <div className="flex justify-center items-center">
                    <button onClick={handleShuffle} className="m-5 bg-gray-400 rounded-lg p-2">
                        <VscDebugRestart size={30}/>
                    </button>
                    <button onClick={handleClick1} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">
                        Exit
                    </button>
                </div>
            </div>
            <a className="flex justify-center items-center">
                <p onClick={handleShuffle}
                   className="cursor-pointer absolute top-3 right-10 hover:scale-110 duration-300">
                    <span className="bg-gray-400 rounded-2xl p-2">Shuffle</span>
                </p>
                <p onClick={handleClick1}
                   className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                    <IoCloseSharp size={30}/>
                </p>
            </a>
            <h1 className="text-4xl font-bold text-center m-5">Puzzle</h1>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className="grid grid-cols-3 lg:m-5">
                    {data.map((value, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleSwitch(index)}
                                className="bg-gray-400 border-2 border-black h-28 md:h-32 w-28 md:w-32 rounded-xl cursor-pointer flex justify-center items-center">
                                <span className={`transform ${value ? "opacity-100" : "opacity-0"} flex justify-center items-center
                                bg-gray-300 rounded-xl h-[90%] w-[90%] duration-300 text-2xl font-bold`}>{
                                    value}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Puzzle;