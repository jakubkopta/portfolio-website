"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Work_tsx_1 = require("./Work.tsx");
var react_1 = require("react");
var Courses_tsx_1 = require("./Courses.tsx");
var ai_1 = require("react-icons/ai");
var Experience = function () {
    var _a = (0, react_1.useState)(false), isToggled = _a[0], setisToggled = _a[1];
    var handleToggle = function () {
        setisToggled(!isToggled);
    };
    // const [action, setAction] = useState("Courses");
    //
    // const toggle = () => {
    //     setAction(prevAction => prevAction === "Courses" ? "Work" : "Courses");
    // };
    return (<div id="Skills">
            <div className="flex justify-center items-center mt-[-20px] ml-[10px]">
                <input id="checkbox" className="hidden" type="checkbox" checked={isToggled} onChange={handleToggle}/>
                <label className="relative block w-[65px] h-[30px] bg-gray-200 rounded-full cursor-pointer transition duration-300" htmlFor="checkbox">
                    <ai_1.AiOutlineHome className="absolute w-[20px] top-[5px] left-[5px] z-10 fill-gray-700 transition duration-300"/>
                    <ai_1.AiOutlineHeart className="absolute w-[20px] top-[5px] left-[40px] fill-gray-700 transition duration-300"/>
                    <div className="absolute w-[25px] h-[25px] top-[3px] left-[3px] bg-red-600 rounded-full shadow-md transition duration-300"></div>
                </label>
            </div>
            <div className="flex">
                <div className="border-2 border-black w-full">
                    <h1 className="text-5xl text-gray-800 text-center font-bold p-10">{isToggled ? "Courses" : "Work"}</h1>
                    {isToggled ? (<Courses_tsx_1.default /> // Render Course component if action is "Courses"
        ) : (<Work_tsx_1.default /> // Render Work component with different props for Work 1
        )}
                </div>
            </div>
        </div>);
};
exports.default = Experience;
