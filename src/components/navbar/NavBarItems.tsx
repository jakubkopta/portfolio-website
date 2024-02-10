import {ReactNode} from "react";
interface Props {
    name: string;
    icon: ReactNode;
}

const NavBarItems = ({name, icon}: Props) => {
    return (
        <>
            <a href="#main"
               className="w-[75%] flex justify-center items-center rounded-lg bg-gray-100 mt-5 p-2 shadow-lg hover:scale-110 ease-in duration-200">
                {icon}
                <span className="pl-2">{name}</span>
            </a>
        </>
)
}

export default NavBarItems;