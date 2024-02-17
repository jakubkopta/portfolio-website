import ExperienceSite from "./ExperienceSite.tsx";
import {useState} from "react";

const Experience = () => {

    const [toggleState, setToggleState] = useState<number>(0);

    const handleToggle = (index: number) => {
        if (index === toggleState) {
            return;
        } else {
            setToggleState(index);
        }
    };

    return (
        <div id="Experience" className="min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl font-bold pt-10">Experience</h1>
                <div className="flex m-10 bg-dark-mode rounded-full border-2 border-black relative">
                    <div onClick={() => handleToggle(0)}
                         className={`flex justify-center items-center w-20 h-10 ${toggleState === 0 ? "text-dark-mode" : "text-gray-200"} rounded-full cursor-pointer duration-300 z-[100]`}>
                        <span className="font-bold">Courses</span>
                    </div>
                    <div onClick={() => handleToggle(1)}
                         className={`flex justify-center items-center w-20 h-10 ${toggleState === 1 ? "text-dark-mode" : "text-gray-200"} rounded-full cursor-pointer duration-300 z-[100]`}>
                        <span className="font-bold">Education</span>
                    </div>
                    <div onClick={() => handleToggle(2)}
                         className={`flex justify-center items-center w-20 h-10 ${toggleState === 2 ? "text-dark-mode" : "text-gray-200"} rounded-full cursor-pointer duration-300 z-[100]`}>
                        <span className="font-bold">Work</span>
                    </div>
                    <div
                        className="absolute top-0 left-0 w-20 h-10 bg-gray-200 text-dark-mode rounded-full duration-300"
                        style={{transform: `translateX(${toggleState * 100}%)`}}></div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full">
                    <h1 className="text-5xl text-center font-bold p-10">{toggleState === 0 ? "Courses" : (toggleState == 1 ? "Education" : "Work")}</h1>
                    <ExperienceSite toggleState={toggleState}/>
                </div>
            </div>
        </div>
    )
}

export default Experience;