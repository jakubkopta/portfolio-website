import NavBar from "./components/navbar/NavBar.tsx";
import Main from "./components/Main.tsx";
import './App.css'
import Projects from "./components/project/Projects.tsx";
import Work from "./components/work/Work.tsx";
import Interests from "./components/interests/Interests.tsx";
import Contact from "./components/contact/Contact.tsx";

function App() {

  return (
    <div>
        <Main/>
        <Work/>
        <Projects/>
        <Interests/>
        <Contact/>
        <NavBar/>
    </div>
  )
}

export default App
