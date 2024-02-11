import {ReactNode, useState} from "react";
interface Props {
    icon: ReactNode;
    name: string;
}

const SideBarItems = ({icon, name}: Props) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <a
                href={`#${name}`}
                className="relative bg-gray-200 p-4 ml-4 mt-4 shadow-lg hover:scale-125 ease-in duration-200"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {icon}
                {isHovered && (
                    <div
                        className="absolute bg-gray-100 p-2 shadow-md rounded-r-md left-full top-1">
                        {name}
                    </div>
                )}
            </a>
        </>
    )
}

export default SideBarItems;