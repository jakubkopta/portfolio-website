import Work from "./Work.tsx";
import {useState} from "react";
import Courses from "./Courses.tsx";

const Experience = () => {

    const [action, setAction] = useState("Courses");

    const toggle = () => {
        setAction(prevAction => prevAction === "Courses" ? "Work" : "Courses");
    };

    return (
        <div id="Skills" className="">
            <div className="flex justify-center gap-5 bg-gray-100 p-10">
                <div className={`bg-blue-500 rounded-full cursor-pointer p-2 ${action === "Work" && 'text-white'}`} onClick={toggle}>Work</div>
                <div className={`bg-blue-500 rounded-full cursor-pointer p-2 ${action === "Work" && 'text-white'}`} onClick={toggle}>Courses</div>
            </div>
            <div className="flex">
                <div className="border-2 border-black w-full">
                    <h1 className="text-5xl text-gray-800 text-center font-bold p-10">{action === "Courses" ? "Courses" : "Work"}</h1>
                    {action === "Courses" ? (
                        <Courses /> // Render Course component if action is "Courses"
                    ) : (
                        <Work/> // Render Work component with different props for Work 1
                    )}
                </div>
            </div>
        </div>
    )
}

export default Experience;