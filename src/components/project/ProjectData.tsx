import {FaJava, FaReact} from "react-icons/fa";

const projectData = [
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

export {projectData};