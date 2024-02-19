import {GoSun} from "react-icons/go";
import {MdOutlineDarkMode} from "react-icons/md";
import {TypeAnimation} from "react-type-animation";

interface Props {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const Home = ({toggleDarkMode, isDarkMode}:Props) => {

    return (
        <div id="Home" className="w-full p-5 md:h-screen">
            <div onClick={toggleDarkMode}
                 className={`flex w-20 h-10 ${isDarkMode ? "bg-gray-200 border-gray-200" : "bg-dark-mode border-dark-mode"} border-2 rounded-full cursor-pointer relative`}>
                    <span
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 ${isDarkMode ? "text-gray-200" : "text-dark-mode"} font-bold`}><GoSun
                        size={20}/></span>
                <span
                    className={`font-bold ${isDarkMode ? "text-gray-200" : "text-dark-mode"} mr-2 absolute right-0 top-1/2 transform -translate-y-1/2`}><MdOutlineDarkMode
                    size={20}/></span>
                <span
                    className={`h-9 w-10 ${isDarkMode ? "bg-dark-mode ml-10 " : "bg-gray-200"} rounded-full transition-all duration-300`}/>
            </div>
            <div className="flex justify-center items-center w-full  mt-10">
                <div
                    className="flex flex-col justify-center items-center min-h-[32rem] rounded-3xl relative md:w-[70%] lg:w-[60%] md:border-2 border-gray-400 md:mt-28">
                    <img className="w-52 h-52 rounded-3xl md:w-72 md:h-72 m-10 md:m-0 md:absolute md:-top-40"
                         src="./images/default.png" alt="profile pic"/>
                    <div className="md:absolute md:top-40">
                        <h1 className="text-5xl text-center">I am <span className="font-bold">Jakub Kopta</span>
                        </h1>
                        <h2 className="text-sm text-center m-4 hidden md:block ">
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
                    <div className="m-10 lg:mb-14 md:absolute md:bottom-3">
                        <p className="text-center font-bold border-2 border-gray-200 rounded-lg shadow-2xl p-5 lg:text-xl">
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