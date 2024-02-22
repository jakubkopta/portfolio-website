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
            className="flex flex-col justify-center items-center md:w-[50vw] mt-10 cursor-pointer relative group lg:w-1/3 lg:hover:w-2/3 ease-in duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false)
                setTextButton(false)
            }}
        >
            <img className="h-[50vh] rounded-xl opacity-30 object-cover md:h-[70vh] lg:h-full group-hover:opacity-100 duration-300"
                 src={imagePath} alt="img"/>
            <span className="font-bold text-[7vw] lg:text-[10vh] opacity-80 absolute transform top-1/2 -translate-y-1/2 lg:-rotate-90
            group-hover:opacity-100 group-hover:text-5xl group-hover:rotate-0 group-hover:-top-10 ease-in duration-500">
                {name}
            </span>
            <div className={`w-full h-full opacity-0 absolute ${position} md:w-auto md:h-auto lg:delay-500 group-hover:opacity-100`}>
                {isHovered && (
                    <div>
                        <div className="md:hidden">
                            {textButton ? <p className="font-bold text-center text-white p-10 backdrop-blur-sm">{description}</p> : ""}
                            <button
                                className="bg-gray-200 text-black rounded-bl-full p-2 pl-4 pb-4 absolute top-0 right-0 cursor-pointer
                                active:bg-gray-400 hover:scale-125 ease-in duration-200"
                                onClick={() => setTextButton(!textButton)}><TbFileDescription/></button>
                        </div>
                        <p className="font-bold text-center text-white p-10 hidden md:block">{description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Interest;