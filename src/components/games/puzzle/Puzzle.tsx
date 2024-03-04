import {IoCloseSharp} from "react-icons/io5";

interface Props {
    handleClick1: () => void;
}

const Puzzle = ({handleClick1} : Props) => {


    return (
        <div className="h-screen">
            <div className="h-2/3 bg-gray-200 shadow-2xl rounded-3xl m-28 relative group flex justify-center items-center">
                <a className="flex justify-center items-center">
                    <p onClick={handleClick1}
                       className="cursor-pointer absolute top-2 right-2 hover:rotate-90 duration-300">
                        <IoCloseSharp size={30}/>
                    </p>
                </a>
                <span className="text-3xl font-bold">Not ready yet</span>
            </div>
        </div>
    )
}

export default Puzzle;