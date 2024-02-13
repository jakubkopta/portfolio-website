import WorkItem from "./WorkItems.tsx";
import {Props} from "./WorkItems.tsx"
const Work = () => {

    const data: Props[] = [];


    return (
        <div id="Skills" className="w-full bg-gray-200 p-6">
            <div className="ml-28 mr-28">
                {data.length > 0 ? (
                    data.map((item, idx) => (
                        <WorkItem
                            key={idx}
                            company={item.company}
                            title={item.title}
                            duration={item.duration}
                            details={item.details}
                        />
                    ))
                ) : (
                    <p>No experience yet</p>
                )}
            </div>
        </div>
    )
}

export default Work;