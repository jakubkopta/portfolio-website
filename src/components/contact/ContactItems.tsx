import {ReactNode} from "react";
import {CiTurnL1} from "react-icons/ci";
interface Props {
    name: string;
    link: string;
    icon: ReactNode;
}

const ContactItems = ({name, link, icon}: Props) => {

    return (
        <div className="h-52 w-52 bg-gray-800 shadow-xl rounded-tl-3xl rounded-br-3xl relative group">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div
                    className="flex flex-col justify-center items-center h-52 w-52 text-gray-200 bg-gray-400
                    rounded-tl-3xl rounded-br-3xl cursor-pointer absolute -left-1 -top-1
                    active:bg-gray-500 active:duration-0 hover:-left-2 hover:-top-2 ease-in duration-300">
                    {icon}
                    <span className="italic font-bold">{name}</span>
                </div>
                {name == "jakubkopta@gmail.com" && (
                    <div
                        className="absolute bottom-1 -right-0 group-hover:-right-28 z-[-1] opacity-40 hidden md:block ease-out duration-500">
                        <CiTurnL1 size={40} className="w-full"/>
                        <div className="flex items-center pl-7">
                            <img src="./images/rightClick.png" className="size-10" alt="right click icon"/>
                            & copy
                        </div>
                    </div>
                )}
            </a>
        </div>
    )
}

export default ContactItems;