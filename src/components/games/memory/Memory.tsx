import {useState} from "react";
import {IoCloseSharp} from "react-icons/io5";
import {VscDebugRestart} from "react-icons/vsc";

interface Props {
    handleClick1: () => void;
    isDarkMode: boolean;
}
const Memory = ({handleClick1, isDarkMode} : Props) => {

    const [data, setData] = useState(["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6", "7", "7", "8", "8"]);
    const [isClicked, setIsClicked] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
    const [count, setCount] = useState(false);
    const [isReady, setIsReady] = useState(true);
    const [prevCard, setPrevCard] = useState("");
    const [prevCardIndex, setPrevCardIndex] = useState(0);

    const handleClick = (index: number) => {
        if (isReady && !isClicked[index]) {
            setIsReady(false);
            const newIsClicked = [...isClicked];
            newIsClicked[index] = true;
            setIsClicked(newIsClicked);
            if (!count) {
                setPrevCard(data[index]);
                setPrevCardIndex(index);
                setCount(true);
                setIsReady(true)
            } else {
                setTimeout(() => {
                    if (prevCard !== data[index]) {
                            const newIsClicked = [...isClicked];
                            newIsClicked[index] = false;
                            newIsClicked[prevCardIndex] = false;
                            setIsClicked(newIsClicked);
                    }
                    setCount(false);
                    setIsReady(true)
                }, 1000);
            }
        }
    }

    const shuffleArray = (array: string[]) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const handleShuffle = () => {
        setData(shuffleArray(data));
        setIsClicked([false, false, false, false, false, false, false, false, false, false, false, false]);
    };

    return (
        <div className={`${isDarkMode ? "bg-dark-mode" : "bg-gray-200"} shadow-2xl rounded-3xl m-1 mt-5 md:m-28 relative group`}>
            <h1 className="text-4xl font-bold text-center m-5">Memory</h1>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className="grid grid-cols-4 gap-2 m-5 relative">
                    {data.map((value, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`${isClicked[index] && "scale-110 bg-gray-500 border-4 border-gray-600"} duration-1000 bg-gray-400 size-20 md:size-32 rounded-xl cursor-pointer flex justify-center items-center`}>
                                {isClicked[index] && value}
                            </div>
                        )
                    })}
                </div>
            </div>
            <a className="flex justify-center items-center">
                <p onClick={handleShuffle}
                   className="cursor-pointer absolute top-3 right-10 hover:-rotate-90 duration-300">
                    <VscDebugRestart size={23}/>
                </p>
                <p onClick={handleClick1}
                   className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                    <IoCloseSharp size={30}/>
                </p>
            </a>
        </div>
    )
}

export default Memory;