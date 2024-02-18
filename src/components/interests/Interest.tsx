import {useState} from "react";
import {TbFileDescription} from "react-icons/tb";

interface Props {
    name: string;
    imagePath: string;
    description: string;
    position: string;
}

const Interest = ({name, imagePath, description, position}: Props) => {

    const [isHovered, setIsHovered] = useState(false);
    const [textButton, setTextButton] = useState(false);

    return (
        <div
            className="lg:w-1/3 cursor-pointer lg:hover:w-2/3 ease-in duration-500 relative flex flex-col justify-center items-center group mt-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="h-[50vh] md:h-[70vh] lg:h-full object-cover opacity-30 group-hover:opacity-100 duration-300 rounded-xl"
                 src={imagePath} alt="img"/>
            <span
                className="opacity-80 group-hover:opacity-100 absolute font-bold text-6xl lg:text-8xl group-hover:text-5xl lg:-rotate-90 group-hover:rotate-0 group-hover:-top-10 ease-in duration-500 transform top-1/2 -translate-y-1/2">{name}</span>
            <div className={`w-full h-full md:w-auto md:h-auto opacity-0 group-hover:opacity-100 lg:delay-500 absolute ${position}`}>
                {isHovered && (
                    <div>
                        <div className="md:hidden">
                            {textButton ? <p className="p-10 font-bold text-center text-white backdrop-blur-sm">{description}</p> : ""}
                            <button
                                className="absolute top-0 right-0 bg-gray-200 rounded-bl-full text-black p-2 pl-4 pb-4 hover:scale-125 ease-in duration-200 cursor-pointer"
                                onClick={() => setTextButton(!textButton)}><TbFileDescription/></button>
                        </div>
                        <p className="hidden md:block p-10 font-bold text-center text-white">{description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Interest;