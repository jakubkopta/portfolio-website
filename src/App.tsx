import NavBar from "./components/navbar/NavBar.tsx";
import Main from "./components/Main.tsx";
import './App.css'
import Projects from "./components/project/Projects.tsx";

function App() {

  return (
    <div>
        <Main/>
        <Projects/>
        <NavBar/>
    </div>
  )
}

export default App
