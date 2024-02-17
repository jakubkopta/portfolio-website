import {TypeAnimation} from "react-type-animation";
import {GoSun} from "react-icons/go";
import {MdOutlineDarkMode} from "react-icons/md";

interface Props {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Home = ({toggleDarkMode, isDarkMode}:Props) => {

    return (
        <div id="Home" className="w-full lg:h-screen p-5">
            <div onClick={toggleDarkMode}
                 className={`flex w-20 h-10 ${isDarkMode ? "bg-gray-200" : "bg-dark-mode"} border-2 border-black rounded-full cursor-pointer relative`}>
                    <span
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 ${isDarkMode ? "text-gray-200" : "text-dark-mode"} font-bold`}><GoSun
                        size={20}/></span>
                <span
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 ${isDarkMode ? "text-gray-200" : "text-dark-mode"} font-bold`}><MdOutlineDarkMode
                    size={20}/></span>
                <span
                    className={`h-9 w-10 rounded-full ${isDarkMode ? "ml-10 bg-dark-mode" : "bg-gray-200"} transition-all duration-300`}/>
            </div>
            <div className="w-full flex justify-center items-center mt-10">
                <div
                    className="flex flex-col justify-center items-center mt-28 min-h-[28rem] md:w-[70%] md:h-[60%] lg:w-1/2 lg:h-1/2 rounded-3xl md:border-2 border-gray-400 relative">
                    <img className="rounded-3xl md:absolute w-52 h-52 lg:-top-40 lg:w-72 lg:h-72 m-10 md:m-0"
                         src="./images/default.png" alt="profile pic"/>
                    <div className="md:absolute md:top-40">
                        <h1 className="text-5xl text-center">I am <span className="font-bold">Jakub Kopta</span>
                        </h1>
                        <h2 className="hidden md:block text-sm m-4 text-center">
                            <TypeAnimation
                                sequence={[
                                    '<h1>Hello World<h1>',
                                    1000,
                                    'console.log("Hello World");',
                                    1000,
                                    'print("Hello World")',
                                    1000,
                                    'System.out.println("Hello World");',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{fontSize: '2em', display: 'inline-block'}}
                                repeat={Infinity}
                            />
                        </h2>
                    </div>
                    <div className="justify-center items-center md:absolute md:bottom-3 m-5">
                        <p className=" p-4 text-center border-2 border-gray-200 rounded-lg shadow-lg">
                            I am a third-year student of Automatics and Robotics at AGH University of Science and
                            Technology
                            in Cracow. I am open to new experience and enjoy learning new things. As someone taking
                            their
                            first steps in the IT industry, I would like to develop my skills in this area.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;