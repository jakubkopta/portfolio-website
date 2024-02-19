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
                            <div className="w-10 h-10 bg-gray-500 rounded-full absolute -left-5 -top-6"></div>
                            <span className="font-bold p-2 pl-8 absolute inset-x-0 -top-6">{duration}</span>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                                <span className="font-bold bg-gray-500 rounded-lg p-2">{company}</span>
                                <span className="font-bold shadow-2xl rounded-lg p-2">{title}</span>
                        </div>
                    </div>
                    <p className="shadow-lg m-5 p-4">{details}</p>
                </li>
            </ol>
        </div>
    )
}

export default WorkItem;