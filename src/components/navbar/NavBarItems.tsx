import {ReactNode} from "react";
interface Props {
    name: string;
    icon: ReactNode;
}

const NavBarItems = ({name, icon}: Props) => {

    return (
        <>
            <a href={`#${name}`}
               className="flex justify-center items-center bg-gray-100 rounded-lg shadow-lg mt-5 p-2 hover:scale-110 ease-in duration-200">
                {icon}
                <span className="pl-2">{name}</span>
            </a>
        </>
)
}

export default NavBarItems;