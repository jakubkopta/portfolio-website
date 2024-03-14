import {ReactElement, useEffect, useState} from "react";
import {IoCloseSharp} from "react-icons/io5";
import {VscDebugRestart} from "react-icons/vsc";
import {
    FcAlarmClock,
    FcFilmReel,
    FcHome,
    FcIdea,
    FcKey,
    FcLibrary,
    FcLike,
    FcLikePlaceholder,
    FcOldTimeCamera,
    FcPuzzle,
    FcSearch,
    FcVlc
} from "react-icons/fc";

interface Props {
    handlePlayClose: () => void;
    isDarkMode: boolean;
}
const Memory = ({handlePlayClose, isDarkMode} : Props) => {

    const [data, setData] = useState<ReactElement[]>([]);
    const [isClicked, setIsClicked] = useState<boolean[]>([]);
    const [checkMatch, setCheckMatch] = useState(false);
    const [isReady, setIsReady] = useState(true);
    const [prevCard, setPrevCard] = useState<ReactElement>();
    const [prevCardIndex, setPrevCardIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [difficultyLevel, setDifficultyLevel] = useState(6);
    const [icons, setIcons] = useState([
        <FcFilmReel size={50}/>,
        <FcVlc size={50}/>,
        <FcLike size={50}/>,
        <FcHome size={50}/>,
        <FcIdea size={50}/>,
        <FcKey size={50}/>,
        <FcLikePlaceholder size={50}/>,
        <FcSearch size={50}/>,
        <FcAlarmClock size={50}/>,
        <FcPuzzle size={50}/>,
        <FcLibrary size={50}/>,
        <FcOldTimeCamera size={50}/>
    ]);

    useEffect(() => {

        const newData = [];
        const newIsClicked = [];
        for (let i = 0; i < difficultyLevel; i++) {
            newData.push(icons[i]);
            newData.push(icons[i]);
            newIsClicked.push(false);
            newIsClicked.push(false);
        }
        setData(newData);
        setIsClicked(newIsClicked);
    }, [difficultyLevel, icons]);

    const handleClick = (index: number) => {
        if (isReady && !isClicked[index]) {
            setIsReady(false);
            const newIsClicked = [...isClicked];
            newIsClicked[index] = true;
            setIsClicked(newIsClicked);
            if (!checkMatch) {
                setPrevCard(data[index]);
                setPrevCardIndex(index);
                setCheckMatch(true);
                setIsReady(true)
            } else {
                setTimeout(() => {
                    if (prevCard !== data[index]) {
                            const newIsClicked = [...isClicked];
                            newIsClicked[index] = false;
                            newIsClicked[prevCardIndex] = false;
                            setIsClicked(newIsClicked);
                    }
                    setCheckMatch(false);
                    setIsReady(true)
                }, 1000);
            }
        }
    }

    const shuffleArray = (array: ReactElement[]) => {
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

    const checkWinner = () => {
        return isClicked.every(value => value);
    }

    return (
        <div
            className={`${isDarkMode ? "bg-dark-mode" : "bg-gray-200"} shadow-2xl rounded-3xl md:mt-10 md:ml-28 md:mr-28 relative group`}>
            <h1 className="text-4xl font-bold text-center p-5 m-5">Memory</h1>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className={`grid ${difficultyLevel > 8 ? "grid-cols-4 md:grid-cols-6" : "grid-cols-4"} gap-2 mb-10 relative`}>
                    {data.map((value, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`${isClicked[index] && "scale-110 bg-gray-500 border-4 border-gray-600"} duration-1000 bg-gray-400 size-20 lg:size-32 rounded-xl cursor-pointer flex justify-center items-center`}>
                                {isClicked[index] && value}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`${isStarted ? "scale-0 opacity-0" : "scale-100 opacity-100"} duration-300 
                   flex flex-col justify-center items-center size-full ${isDarkMode ? "bg-dark-mode/60" : "bg-gray-200/60"} absolute top-0 rounded-3xl`}>
                <button onClick={() => {
                    handleShuffle();
                    setIsStarted(true);
                }} className="bg-blue-400 p-4 rounded-xl text-3xl font-extrabold hover:scale-110 duration-300">Play
                </button>
                <div className="flex justify-center items-center m-3 gap-2">
                    <button onClick={() => {
                        setDifficultyLevel(6);
                        setIcons(shuffleArray(icons));
                    }} className="bg-yellow-300 p-2 rounded-xl hover:scale-110 duration-300">Easy
                    </button>
                    <button onClick={() => {
                        setDifficultyLevel(8);
                        setIcons(shuffleArray(icons));
                    }} className="bg-orange-300 p-2 rounded-xl hover:scale-110 duration-300">Medium
                    </button>
                    <button onClick={() => {
                        setDifficultyLevel(12);
                        setIcons(shuffleArray(icons));
                    }} className="bg-red-400 p-2 rounded-xl hover:scale-110 duration-300">Hard
                    </button>
                </div>
            </div>
            <div
                className={`${checkWinner() && isStarted ? "scale-100 opacity-100" : "scale-0 opacity-0"} duration-500 ${isDarkMode ? "bg-dark-mode/90" : "bg-gray-200/90"} rounded-3xl flex flex-col justify-center items-center text-center absolute inset-0 z-[100]`}>
                <span className="text-6xl font-bold p-3">Winner</span>
                <div className="flex justify-center items-center">
                    <button onClick={() => {
                        setIsStarted(false);
                        setIsClicked([false, false, false, false, false, false, false, false, false, false, false, false]);
                        handleShuffle();
                        setIcons(shuffleArray(icons));
                    }} className="m-5 bg-gray-400 rounded-lg p-2">
                        <VscDebugRestart size={30}/>
                    </button>
                    <button onClick={() => {
                        handlePlayClose();
                        setIsStarted(false);
                    }} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">
                        Exit
                    </button>
                </div>
            </div>
            <a className="flex justify-center items-center">
                <p onClick={() => {
                    handleShuffle();
                    setIcons(shuffleArray(icons));
                    setIsStarted(false);
                }}
                   className="cursor-pointer absolute top-3 right-10 hover:-rotate-90 duration-300">
                    <VscDebugRestart size={23}/>
                </p>
                <p onClick={handlePlayClose}
                   className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                    <IoCloseSharp size={30}/>
                </p>
            </a>
        </div>
    )
}

export default Memory;