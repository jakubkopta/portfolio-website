import {useState} from "react";
import {FaHtml5, FaJava, FaPython, FaReact} from "react-icons/fa";

const Skills1 = () => {

    const [expanded, setExpanded] = useState<number>(0);

    const toggleHeight = (index: number) => {
        if (index === expanded) {
            return;
        } else {
            setExpanded(index);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div onClick={() => toggleHeight(0)} className={`flex flex-col items-center w-96 bg-gray-100 border-2 border-red-200 text-gray-700 text-sm font-bold p-2 cursor-pointer transition ease-out duration-200 transform ${
                expanded === 0 ? 'h-96' : ''
            }`}>
                <span className="text-6xl m-2 drop-shadow-xl"><FaJava/></span>
                {expanded === 0 && <p className="m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>}
            </div>
            <div onClick={() => toggleHeight(1)} className={`flex flex-col items-center w-96 bg-gray-100 border-2 border-red-200 text-gray-700 text-sm font-bold p-2 cursor-pointer ${
                expanded === 1 ? 'h-96' : ''
            }`}>
                <span className="text-6xl m-2 drop-shadow-xl"><FaReact/></span>
                {expanded === 1 && <p className="m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>}
            </div>
            <div onClick={() => toggleHeight(2)} className={`flex flex-col items-center w-96 bg-gray-100 border-2 border-red-200 text-gray-700 text-sm font-bold p-2 cursor-pointer ${
                expanded === 2 ? 'h-96' : ''
            }`}>
                <span className="text-6xl m-2 drop-shadow-xl"><FaPython/></span>
                {expanded === 2 && <p className="m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>}
            </div>
            <div onClick={() => toggleHeight(3)} className={`flex flex-col items-center w-96 bg-gray-100 border-2 border-red-200 text-gray-700 text-sm font-bold p-2 cursor-pointer transition-all duration-500 ${
                expanded === 3 ? 'h-96' : ''
            }`}>
                <span className="text-6xl m-2 drop-shadow-xl"><FaHtml5/></span>
                {expanded === 3 && <p className="m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>}
            </div>
        </div>
    )
}

export default Skills1;