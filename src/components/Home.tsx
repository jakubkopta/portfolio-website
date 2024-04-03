import {GoSun} from "react-icons/go";
import {MdOutlineDarkMode} from "react-icons/md";
import {TypeAnimation} from "react-type-animation";
import {useEffect, useState} from "react";

interface Props {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
}

const imagePaths = [
    "./images/profile.jpg",
    "./images/profile1.jpg",
    "./images/me.jpg"
]


const Home = ({toggleDarkMode, isDarkMode}:Props) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = imagePaths.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalImages]);

    return (
        <div id="Home" className="w-full p-5 md:min-h-screen">
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
            <div className="flex justify-center items-center w-full mt-10">
                <div className="flex flex-col justify-center items-center min-h-[32rem] rounded-3xl relative md:w-[70%] lg:w-[60%] md:border-2 border-gray-400 md:mt-28 group">
                    <div className="m-10 md:m-0 md:absolute md:-top-40 w-52 h-52 rounded-3xl md:w-96 md:h-72 overflow-hidden">
                        {imagePaths.map((path, index) => (
                            <img
                                key={index}
                                className={`w-52 h-52 md:w-64 md:h-64 md:top-4 rounded-3xl absolute left-[50%] -translate-x-1/2 object-cover duration-1000
                                ${currentIndex === index ? 'z-[3] opacity-100 md:scale-110' : 'z-[1] opacity-20'}
                                ${currentIndex === index ? 'md:left-[50%]' : (currentIndex === (index > totalImages-2 ? 0 : index+1) ? "md:left-[60%]" : "md:left-[40%]")}
                                border-2 ${isDarkMode ? "border-dark-mode" : "border-gray-200"}`}
                                src={path}
                                alt="profile pic"
                            />
                        ))}
                    </div>
                    <div className="md:absolute md:top-40">
                        <h1 className="text-5xl text-center">I am <span className="font-bold">Jakub Kopta</span>
                        </h1>
                        <h2 className="text-sm text-center m-4 hidden md:block ">
                            <TypeAnimation
                                sequence={[
                                    '<h1>Hello World<h1>',
                                    2000,
                                    'console.log("Hello World");',
                                    2000,
                                    'print("Hello World")',
                                    2000,
                                    'System.out.println("Hello World");',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{fontSize: '2em', display: 'inline-block'}}
                                repeat={Infinity}
                            />
                        </h2>
                    </div>
                    <div className="m-10 md:absolute md:bottom-3">
                        <p className="text-center font-bold border-2 border-gray-200 rounded-lg shadow-2xl p-5 lg:text-xl">
                            I am in my third year of studies towards a Bachelor’s degree in Automatics and Robotics at the AGH University of Science and Technology in Krakow.
                            I am interested in improving my skills in programming and I am open to new career opportunities that will help me to grow in this field.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;