import Project from "./Project.tsx";
import {FaJava, FaReact} from "react-icons/fa";

const Projects = () => {

    const data = [
        {
            name: "Calculator",
            imagePath: "./images/calculator.gif",
            language: "JavaFX",
            icon: <FaJava className="icon"/>
        },
        {
            name: "Snake",
            imagePath: "./images/snake.gif",
            language: "JavaFX",
            icon: <FaJava className="icon"/>
        },
        {
            name: "Order completing",
            imagePath: "./images/orders.gif",
            language: "Java",
            icon: <FaJava className="icon"/>
        },
        {
            name: "To Do List",
            imagePath: "./images/todo.gif",
            language: "React",
            icon: <FaReact className="icon"/>
        },
        {
            name: "Fleet Manager",
            imagePath: "./images/fm.gif",
            language: "Java",
            icon: <FaJava className="icon"/>
        }
    ]

    return (
        <div id="Projects" className="w-full bg-gray-200 pb-10">
            <h1 className="text-5xl text-gray-800 text-center font-bold p-10">
                Projects
            </h1>
            <p className="text-gray-800 text-center m-28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <div className="ml-28 mr-28 grid lg:grid-cols-3 gap-12">
                {data.map((item, idx) => (
                    <Project key={idx} name={item.name} imagePath={item.imagePath} language={item.language} icon={item.icon}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;