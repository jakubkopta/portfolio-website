import {useState} from "react";

interface Props {
    name: string;
    imagePath: string;
    description: string;
    position: string;
}

const Interest = ({name, imagePath, description, position}: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="lg:h-full lg:w-1/3 cursor-pointer lg:hover:w-2/3 ease-in duration-500 relative flex flex-col justify-center items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="h-full object-cover opacity-40 group-hover:opacity-100 rounded-xl"
                 src={imagePath} alt="img"/>
            <span
                className="mix-blend-screen absolute font-bold text-6xl lg:text-8xl lg:-rotate-90 transform top-1/2 -translate-y-1/2">{name}</span>
            <div className={`opacity-0 group-hover:opacity-100 lg:delay-500 absolute ${position}`}>
                {isHovered && (
                    <p className="p-10 text-white font-bold text-center">{description}</p>
                )}
            </div>
        </div>
    )
}

export default Interest;