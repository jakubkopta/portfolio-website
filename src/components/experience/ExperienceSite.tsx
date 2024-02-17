import WorkItem from "./ExperienceInfo.tsx";
import { workData, coursesData, educationData } from "./ExperienceData.tsx";

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
        <div id="Skills" className="w-full p-6">
            <div className="ml-5 mr-5 md:ml-28 md:mr-28">
                {data === null ? (
                    <p className="text-center font-bold">Nothing there but cannot wait to gain some!</p>
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