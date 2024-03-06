import {CiPlay1} from "react-icons/ci";

interface Props {
    name: string;
    imagePath: string;
    handleClick1: () => void;
    setGamePlayed: (name: string) => void;
}


const Game = ({name, imagePath, handleClick1, setGamePlayed} : Props) => {

    const handleClick = () => {
        setGamePlayed(name);
        handleClick1();
    }

    return (
        <div>
            <div className="rounded-lg shadow-lg relative cursor-pointer overflow-hidden bg-gradient-to-b from-gray-300 to-gray-50">
                <img className="w-full h-64 bg-bottom opacity-10" src={imagePath}
                     alt={`${name} image`}/>
                <div
                    className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-2xl md:text-3xl text-gray-800 font-bold pb-5">{name}</h1>
                    <a className="flex justify-center items-center">
                        <p onClick={handleClick} className="w-32 text-white bg-gray-800 rounded-lg p-3 cursor-pointer
                        active:bg-gray-950 hover:scale-110 ease-in duration-150 flex justify-center items-center gap-1">
                            Play <CiPlay1 size={20}/>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Game;