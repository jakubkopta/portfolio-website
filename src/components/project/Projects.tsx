import Project from "./Project.tsx";
import {projectData} from "./ProjectData.tsx";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useState} from "react";
import Games from "../games/Games.tsx";

const Projects = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div id="Projects" className="min-h-screen pb-10">
            <h1 className="text-6xl text-center font-bold p-10">
                Projects
            </h1>
            <p className="text-center text-xl m-10 md:m-28 md:mb-0">
                I'm passionate about expanding my programming skills and creating various projects in my free time.
                With a focus on Java and React, I dive into the world of software development to create innovative solutions and explore new possibilities.
                From building dynamic web applications with React to crafting robust backend systems with Java, I enjoy every aspect of the development process.
                In my spare time, I also love to develop mini-games for fun. Feel free to explore the projects below and even play some games!
            </p>
            <div className={`w-full flex ${isClicked ? "justify-start" : "justify-end"}`}>
                <button onClick={handleClick} className="bg-gray-300 shadow-2xl p-2 rounded-3xl m-10 ml-10 mr-10 md:ml-28 md:mr-28 hover:scale-110 ease-in duration-200">
                    {isClicked ?
                        <span className="flex justify-center items-center gap-3"><FaArrowLeft /> Projects</span>
                        :
                        <span className="flex justify-center items-center gap-3">Mini Games <FaArrowRight /></span>}
                </button>
            </div>
            {isClicked ? (
                    <Games/>
            ) : (
                <div className="grid gap-12 ml-10 mr-10 md:ml-28 md:mr-28 lg:grid-cols-3 slide-right">
                    {projectData.map((item, idx) => (
                        <Project key={idx} name={item.name} imagePath={item.imagePath} language={item.language} icon={item.icon} githubName={item.githubName}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Projects;