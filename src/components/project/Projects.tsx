import Project from "./Project.tsx";
import {projectData} from "./ProjectData.tsx";

const Projects = () => {

    return (
        <div id="Projects" className="min-h-screen pb-10">
            <h1 className="text-6xl text-center font-bold p-10">
                Projects
            </h1>
            <p className="text-center text-xl m-10 md:mt-10 md:m-28 md:mb-0">
                I'm passionate about expanding my programming skills and creating various projects in my free time.
                With a focus on Java and React, I dive into the world of software development to create innovative solutions and explore new possibilities.
                From building dynamic web applications with React to crafting robust backend systems with Java, I enjoy every aspect of the development process.
                <br/>Feel free to explore the projects below.
            </p>
            <div className="grid gap-12 m-10 md:m-28 md:mt-10 lg:grid-cols-3 slide-right">
                {projectData.map((item, idx) => (
                    <Project key={idx} name={item.name} imagePath={item.imagePath} language={item.language} icon={item.icon} githubName={item.githubName}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;