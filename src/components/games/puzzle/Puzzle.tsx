import {IoCloseSharp, IoPlayOutline} from "react-icons/io5";
import {VscDebugRestart} from "react-icons/vsc";
import {useEffect, useState} from "react";

interface Props {
    handleClick1: () => void;
}

const Puzzle = ({handleClick1} : Props) => {

    const [data, setData] = useState(["", "1", "2",
                                                                                    "3", "4", "5",
                                                                                    "6", "7", "8"]);
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

    function shuffleArray(array: string[]) {

        const oldArray = [...array];

        do {
            for (let i = 0; i < array.length; i++) {
                const emptyIndex = array.indexOf('');
                const neighbours = switchPossibilities[emptyIndex];
                const randomNeighbour = neighbours[Math.floor(Math.random() * neighbours.length)];
                [array[emptyIndex], array[randomNeighbour]] = [array[randomNeighbour], array[emptyIndex]];
            }
        } while (array.join() === ["", "1", "2", "3", "4", "5", "6", "7", "8"].join() || array.join() === oldArray.join() || countMisplacedNumbers(array) < array.length/2);

        return array;
    }

    const handleShuffle = () => {
        const shuffledData = shuffleArray(data);
        setData(shuffledData);
        setIsStarted(true);
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
        <div className="bg-gray-200 shadow-2xl rounded-3xl m-1 mt-5 md:m-28 pb-10 relative group">
            <div
                className={`${checkWinner() && isStarted ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 bg-white/90 rounded-3xl flex flex-col justify-center items-center absolute inset-0 z-[100]`}>
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
                   className={`${isStarted ? "top-3 right-10" : "flex justify-start items-start h-96 w-96 bg-white/60 top-[100px] right-1/2 translate-x-1/2 z-[100]"} 
                   cursor-pointer absolute`}>
                    <span className={`${isStarted ? "bg-gray-400 p-2" : "border-4 border-black p-6"} hover:scale-110 duration-300 rounded-xl m-[1px]`}>{isStarted ? "Shuffle" : <IoPlayOutline size={70}/>}</span>
                </p>
                <p onClick={() => {
                    handleClick1();
                    setIsStarted(false);
                    setData(["", "1", "2", "3", "4", "5", "6", "7", "8"]);
                }}
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