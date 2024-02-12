import {useState} from "react";
import Skill from "./Skill.tsx";

const Skills = () => {

    const data = [
        {
            name: "Java",
            color: "bg-blue-100",
            description: "qqqq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-1/4 right-1/2"
        },
        {
            name: "React",
            color: "bg-blue-100",
            description: "qq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-3/4 right-1/2"
        },
        {
            name: "Python",
            color: "bg-blue-100",
            description: "qq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-1/2 right-1/3"
        },
        {
            name: "JavaScript",
            color: "bg-blue-100",
            description: "qqq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-1/2 right-2/3"
        },
        {
            name: "JavaScript",
            color: "bg-blue-100",
            description: "qqqq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-1/4 right-2/3"
        },
        {
            name: "JavaScript",
            color: "bg-blue-100",
            description: "qqq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-3/4 right-2/3"
        },
        {
            name: "JavaScript",
            color: "bg-blue-100",
            description: "qqq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-1/4 right-1/3"
        },
        {
            name: "JavaScript",
            color: "bg-blue-100",
            description: "qqq",
            positionA: "top-1/2 right-1/2",
            positionB: "top-3/4 right-1/3"
        }
    ];

    const [isMoved, setIsMoved] = useState(false);

    const handleClick = () => {
        if (!isMoved) {
            setIsMoved(!isMoved)
        } else {
            setIsMoved(!isMoved)
        }
    };

    return (
        <div className="relative h-screen">
            <div className="w-40 h-40 bg-red-100 border-2 border-red-200 flex flex-col justify-center items-center text-white rounded-full p-5 absolute z-[100] cursor-pointer top-1/2 right-1/2" onClick={handleClick}>
                Skills
            </div>
            {data.map((item, idx) => (
                <Skill key={idx} name={item.name} color={item.color} description={item.description} positionA={item.positionA} positionB={item.positionB} isMoved={isMoved}/>
            ))}
        </div>
    );
};

export default Skills;