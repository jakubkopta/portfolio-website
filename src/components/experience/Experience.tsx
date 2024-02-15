import Work from "./Work.tsx";
import {useState} from "react";
import Courses from "./Courses.tsx";

const Experience = () => {

    const [isToggled, setisToggled] = useState(false);
    const handleToggle = () => {
        setisToggled(!isToggled);
    }

    return (
        <div id="Experience" className="bg-gray-200 min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-gray-800 font-bold bg-gray-200 pt-10">Experience</h1>
                <div onClick={handleToggle} className="flex w-40 h-10 bg-gray-800 border-2 border-black m-10 rounded-full cursor-pointer relative">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 text-gray-800 font-bold">Courses</span>
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-5 text-gray-800 font-bold">Work</span>
                    <span className={`h-9 w-20 bg-gray-200 rounded-full ${isToggled ? "ml-20" : ""} transition-all duration-300`}/>
                </div>
            </div>
            <div className="flex">
                <div className="w-full">
                    <h1 className="text-5xl text-gray-800 text-center font-bold p-10">{isToggled ? "Work" : "Courses"}</h1>
                    {isToggled ? (
                        <Work />
                    ) : (
                        <Courses/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Experience;