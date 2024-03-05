import {IoCloseSharp} from "react-icons/io5";
import {VscDebugRestart} from "react-icons/vsc";
import {FaRegCircle} from "react-icons/fa";
import {useState} from "react";

interface Props {
    handleClick1: () => void;
}

const Puzzle = ({handleClick1} : Props) => {

    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    setData(["", "", "", "", "", "", "", "", ""])


    return (
        <div className="bg-gray-200 shadow-2xl rounded-3xl m-1 mt-5 md:m-28 relative group">
            <div
                className={`hidden duration-500 bg-white/90 rounded-3xl flex-col justify-center items-center absolute inset-0 z-[100]`}>

                <div className="flex justify-center items-center">
                    <button className="m-5 bg-gray-400 rounded-lg p-2">
                        <VscDebugRestart size={30}/>
                    </button>
                    <button onClick={handleClick1} className="font-bold text-3xl bg-gray-400 rounded-lg p-2">
                        Exit
                    </button>
                </div>
            </div>
            <a className="flex justify-center items-center">
                <p
                   className="cursor-pointer absolute top-3 right-10 hover:-rotate-90 duration-300">
                    <VscDebugRestart size={23}/>
                </p>
                <p onClick={handleClick1}
                   className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                    <IoCloseSharp size={30}/>
                </p>
            </a>
            <h1 className="text-3xl font-bold text-center m-5">Puzzle</h1>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div className="grid grid-cols-3 lg:m-5">
                    {data.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-gray-400 border-2 border-black h-28 md:h-32 w-28 md:w-32 rounded-xl cursor-pointer flex justify-center items-center">
                                {value === 'X' ? <IoCloseSharp size={130}/> : (value === 'O' ? <FaRegCircle size={100}/> : "")}
                                {index !== 0 && index}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Puzzle;