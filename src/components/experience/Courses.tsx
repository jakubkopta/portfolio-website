import WorkItem from "./WorkItems.tsx";

const Courses = () => {

    const data = [
        {
            company: "Coders Lab",
            title: "Java Developer",
            duration: "16.07.2022 - 19.02.2023",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                "                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                "                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
                "                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
                "                deserunt mollit anim id est laborum."
        },{
            company: "Coders Lab",
            title: "Scrum Lab",
            duration: "06.11.2022 - 18.11.2022",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                "                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                "                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
                "                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
                "                deserunt mollit anim id est laborum."
        },{
            company: "Coders Lab",
            title: "Basics of HTML & CSS",
            duration: "04.2022",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                "                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                "                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
                "                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
                "                deserunt mollit anim id est laborum."
        },{
            company: "Coders Lab",
            title: "FullStack Developer",
            duration: "19.02.2023 - 19.04.2023",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n" +
                "                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n" +
                "                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n" +
                "                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n" +
                "                deserunt mollit anim id est laborum."
        }
    ];

    return (
        <div id="Skills" className="w-full bg-gray-200 p-6">
            <div className="ml-5 mr-5 md:ml-28 md:mr-28">
                {data.map((item, idx) => (
                    <WorkItem key={idx} company={item.company} title={item.title} duration={item.duration}
                              details={item.details}/>
                ))}
            </div>
        </div>
    )
}

export default Courses;