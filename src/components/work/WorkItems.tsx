interface Props {
    company: string;
    title: string;
    duration: string;
    details: string;
}

const WorkItem = ({company, title, duration, details}: Props) => {
    return (
        <div>
            <ol>
                <li>
                    <p>
                       <span className="p-2 bg-blue-500 rounded-lg font-bold">{company}</span>
                       <span className="p-2 font-bold text-blue-500">{title}</span>
                       <span className="p-2 font-bold text-black">{duration}</span>
                    </p>
                    <p className="p-4 shadow-lg m-6">{details}</p>
                </li>
            </ol>
        </div>
    )
}

export default WorkItem;