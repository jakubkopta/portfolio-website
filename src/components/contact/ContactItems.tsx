import {ReactNode} from "react";
interface Props {
    name: string;
    link: string;
    icon: ReactNode;
}

const ContactItems = ({name, link, icon}: Props) => {

    return (
        <div className="h-52 w-52 bg-gray-800 shadow-xl rounded-tl-3xl rounded-br-3xl relative">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div
                    className="flex flex-col justify-center items-center h-52 w-52 text-gray-200 bg-gray-400
                    rounded-tl-3xl rounded-br-3xl cursor-pointer absolute -left-1 -top-1
                    active:bg-gray-500 active:duration-0 hover:-left-2 hover:-top-2 ease-in duration-300">
                    {icon}
                    <span className="italic font-bold">{name}</span>
                </div>
            </a>
        </div>
    )
}

export default ContactItems;