import {FaJava, FaReact} from "react-icons/fa";
import {TbBrandKotlin} from "react-icons/tb";

const projectData = [
    {
        name: "Cat Facts App",
        imagePath: "./images/cat.gif",
        language: "Kotlin + React",
        icon: <TbBrandKotlin className="icon"/>,
        githubName: "cat-facts-webapp"
    },
    {
        name: "Weather App",
        imagePath: "./images/weather.gif",
        language: "Kotlin + React",
        icon: <TbBrandKotlin className="icon"/>,
        githubName: "nubiweather"
    },
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