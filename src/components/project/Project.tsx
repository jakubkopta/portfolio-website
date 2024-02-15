import {ReactNode} from "react";

interface Props {
    name: string;
    imagePath: string;
    language: string;
    icon: ReactNode;
    githubName: string;
}

const Project = ({name, imagePath, language, icon, githubName}: Props) => {
    return (
        <div className="rounded-lg overflow-hidden shadow-lg relative cursor-pointer group hover:bg-gradient-to-b from-gray-300 to-gray-50">
            <img className="w-full h-52 object-cover bg-bottom group-hover:opacity-10" src={imagePath} alt={`${name} gif`}/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                <h1 className="text-3xl font-bold pb-5">{name}</h1>
                <a href={`https://github.com/jakubkopta/${githubName}`} className="flex justify-center items-center">
                    <p className="p-3 bg-gray-800 text-white cursor-pointer rounded-lg w-32">More info</p>
                </a>
            </div>
            <div className="bg-red-100 border-2 border-red-200 text-gray-700 text-sm font-bold rounded-full p-2 absolute top-0 m-2">
                {icon}<span>{language}</span>
            </div>
        </div>
    )
}

export default Project;