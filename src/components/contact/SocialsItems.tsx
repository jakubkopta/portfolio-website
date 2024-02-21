import {ReactNode} from "react";
interface Props {
    link: string;
    icon: ReactNode;
}

const SocialsItems = ({link, icon}: Props) => {

    return (
        <a href={link}>
            <li className="flex justify-center items-center text-white bg-gray-800 rounded-full p-4 cursor-pointer relative group hover:text-blue-200">
                <div
                    className="h-full w-full bg-blue-200 rounded-full absolute top-0 left-0 z-[-1]
                    group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm transition scale-90">
                </div>
                {icon}
            </li>
        </a>
    )
}

export default SocialsItems;