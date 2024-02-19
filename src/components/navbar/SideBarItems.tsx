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
                className="bg-gray-200 shadow-lg p-4 ml-4 mt-4 relative hover:scale-125 ease-in duration-200"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {icon}
                {isHovered && (
                    <div
                        className="bg-gray-100 shadow-md rounded-r-md p-2 absolute left-full top-1">
                        {name}
                    </div>
                )}
            </a>
        </>
    )
}

export default SideBarItems;