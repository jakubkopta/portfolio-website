import NavBar from "./components/navbar/NavBar.tsx";
import Home from "./components/Home.tsx";
import './App.css'
import Projects from "./components/project/Projects.tsx";
import Interests from "./components/interests/Interests.tsx";
import Contact from "./components/contact/Contact.tsx";
import Experience from "./components/experience/Experience.tsx";
import {useState} from "react";
import Games from "./components/games/Games.tsx";

function App() {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className={`${isDarkMode ? "bg-dark-mode text-slate-200" : "bg-slate-200 text-gray-800"}`}>
                <Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
                <Experience/>
                <Projects/>
                <Games/>
                <Interests/>
            </div>
            <div>
                <Contact/>
                <NavBar isDarkMode={isDarkMode}/>
            </div>
        </>
    )
}

export default App
