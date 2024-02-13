import NavBar from "./components/navbar/NavBar.tsx";
import Main from "./components/Main.tsx";
import './App.css'
import Projects from "./components/project/Projects.tsx";
import Interests from "./components/interests/Interests.tsx";
import Contact from "./components/contact/Contact.tsx";
import Experience from "./components/experience/Experience.tsx";

function App() {

  return (
    <div>
        <Main/>
        <Experience/>
        <Projects/>
        <Interests/>
        <Contact/>
        <NavBar/>
    </div>
  )
}

export default App
