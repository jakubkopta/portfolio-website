import React, { useState, Suspense } from "react";
import NavBar from "./components/navbar/NavBar.tsx";
import Home from "./components/Home.tsx";
import './App.css'

const Projects = React.lazy(() => import("./components/project/Projects.tsx"));
const Interests = React.lazy(() => import("./components/interests/Interests.tsx"));
const Contact = React.lazy(() => import("./components/contact/Contact.tsx"));
const Experience = React.lazy(() => import("./components/experience/Experience.tsx"));
const Games = React.lazy(() => import("./components/games/Games.tsx"));


function App() {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <div className={`${isDarkMode ? "bg-dark-mode text-slate-200" : "bg-slate-200 text-gray-800"}`}>
                <Home toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Experience/>
                    <Projects/>
                    <Games isDarkMode={isDarkMode}/>
                    <Interests/>
                </Suspense>
            </div>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Contact/>
                    <NavBar isDarkMode={isDarkMode}/>
                </Suspense>
            </div>
        </>
    )
}

export default App
