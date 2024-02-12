import {useEffect, useState} from "react";

interface Props {
    name: string;
    color: string;
    description: string;
    positionA: string;
    positionB: string;
    isMoved: boolean;
}

const Skill = ({name, color, description, positionA, positionB, isMoved}: Props) => {

    const [position, setPosition] = useState(positionA);

    useEffect(() => {
        setPosition(isMoved ? positionB : positionA);
    }, [isMoved, positionA, positionB]);


    return (
        <div>
            <div
                className={`w-40 h-40 ${color} flex flex-col justify-center items-center rounded-full text-center absolute transition-all duration-700 ${position} hover:drop-shadow-2xl`}>
                {name}
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Skill;