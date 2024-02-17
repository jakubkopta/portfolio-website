import Project from "./Project.tsx";
import {FaJava, FaReact} from "react-icons/fa";

const Projects = () => {

    const data = [
        {
            name: "Calculator",
            imagePath: "./images/calculator.gif",
            language: "JavaFX",
            icon: <FaJava className="icon"/>,
            githubName: "CalculatorJavaFX"
        },
        {
            name: "Snake",
            imagePath: "./images/snake.gif",
            language: "JavaFX",
            icon: <FaJava className="icon"/>,
            githubName: "Snake"
        },
        {
            name: "Order completing",
            imagePath: "./images/orders.gif",
            language: "Java",
            icon: <FaJava className="icon"/>,
            githubName: "InStoreFulfillment"
        },
        {
            name: "To Do List",
            imagePath: "./images/todo.gif",
            language: "React",
            icon: <FaReact className="icon"/>,
            githubName: "toDo"
        },
        {
            name: "Fleet Manager",
            imagePath: "./images/fm.gif",
            language: "Java",
            icon: <FaJava className="icon"/>,
            githubName: "fleet-manager-springboot"
        },
        {
            name: "Valentines",
            imagePath: "./images/valentines.gif",
            language: "React",
            icon: <FaReact className="icon"/>,
            githubName: "valentines"
        }
    ]

    return (
        <div id="Projects" className="min-h-screen pb-10">
            <h1 className="text-6xl text-center font-bold p-10">
                Projects
            </h1>
            <p className="text-center text-xl m-10 md:m-28">
                I'm passionate about expanding my programming skills and creating various projects in my free time.
                With a focus on Java and React, I dive into the world of software development to create innovative solutions and explore new possibilities.
                From building dynamic web applications with React to crafting robust backend systems with Java, I enjoy every aspect of the development process.
                Feel free to explore the projects below.
            </p>
            <div className="ml-10 mr-10 md:ml-28 md:mr-28 grid lg:grid-cols-3 gap-12">
                {data.map((item, idx) => (
                    <Project key={idx} name={item.name} imagePath={item.imagePath} language={item.language} icon={item.icon} githubName={item.githubName}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;