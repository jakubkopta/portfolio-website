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
        <div className="rounded-lg shadow-lg relative cursor-pointer overflow-hidden group hover:bg-gradient-to-b from-gray-300 to-gray-50">
            <img className="w-full h-52 bg-bottom object-cover group-hover:opacity-10" src={imagePath} alt={`${name} gif`}/>
            <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block">
                <h1 className="text-3xl text-gray-800 font-bold pb-5">{name}</h1>
                <a href={`https://github.com/jakubkopta/${githubName}`} className="flex justify-center items-center">
                    <p className="w-32 text-white bg-gray-800 rounded-lg p-3 cursor-pointer
                    active:bg-gray-950 hover:scale-110 ease-in duration-150">
                        More info
                    </p>
                </a>
            </div>
            <div className="text-gray-700 text-sm font-bold bg-red-100 border-2 border-red-200 rounded-full p-2 m-2 absolute top-0">
                {icon}<span>{language}</span>
            </div>
        </div>
    )
}

export default Project;