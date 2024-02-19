import WorkItem from "./ExperienceInfo.tsx";
import { workData, coursesData, educationData } from "./ExperienceData.tsx";
import {FaRegSmileBeam} from "react-icons/fa";

interface Props {
    toggleState: number;
}
const ExperienceSite = ({toggleState}: Props) => {


    let data;
    if (toggleState === 0) {
        data = coursesData;
    } else if (toggleState === 1) {
        data = educationData;
    } else {
        data = workData;
    }

    return (
        <div id="Skills" className="flex justify-center items-center w-full">
            <div className="w-2/3">
                {data === null ? (
                    <div className="flex flex-col justify-center items-center gap-10 p-10">
                        <p className="font-bold text-xl">Nothing there but cannot wait to gain some!</p>
                        <FaRegSmileBeam  size={50}/>
                    </div>
                ) : (
                    data.map((item, idx) => (
                        <WorkItem key={idx} company={item.company} title={item.title} duration={item.duration}
                              details={item.details}/>
                ))
                )}
            </div>
        </div>
    )
}

export default ExperienceSite;