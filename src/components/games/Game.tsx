interface Props {
    name: string;
    imagePath: string;
    handleClick1: () => void;
}

const Game = ({name, imagePath, handleClick1} : Props) => {
    return (
        <div>
            <div className="h-96 rounded-lg shadow-lg relative cursor-pointer overflow-hidden group hover:bg-gradient-to-b from-gray-300 to-gray-50">
                <img className="w-full object-cover group-hover:opacity-10" src={imagePath}
                     alt={`${name} gif`}/>
                <div
                    className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block">
                    <h1 className="text-3xl text-gray-800 font-bold pb-5">{name}</h1>
                    <a className="flex justify-center items-center">
                        <p onClick={handleClick1} className="w-32 text-white bg-gray-800 rounded-lg p-3 cursor-pointer
                        active:bg-gray-950 hover:scale-110 ease-in duration-150">
                            More info
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Game;