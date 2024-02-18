export interface Props {
    company: string;
    title: string;
    duration: string;
    details: string;
}

const WorkItem = ({company, title, duration, details}: Props) => {
    return (
        <div>
            <ol>
                <li className="border-l-2 border-gray-500 pb-10">
                    <div className="flex flex-col w-80 pl-5 pr-5 relative">
                        <div className="flex mb-5">
                            <div className="absolute -left-5 -top-6 w-10 h-10 bg-gray-500 rounded-full"></div>
                            <span className="absolute inset-x-0 -top-6 p-2 pl-8 font-bold ">{duration}</span>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                                <span className="p-2 rounded-lg font-bold bg-gray-500">{company}</span>
                                <span className="p-2 rounded-lg font-bold shadow-2xl">{title}</span>
                        </div>
                    </div>
                    <p className="p-4 shadow-lg m-5">{details}</p>
                </li>
            </ol>
        </div>
    )
}

export default WorkItem;