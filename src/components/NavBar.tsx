import {useState} from "react";
import {
    AiOutlineAim,
    AiOutlineFundProjectionScreen,
    AiOutlineHome,
    AiOutlineMail, AiOutlineUnorderedList
} from "react-icons/ai";


const NavBar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <a onClick={handleNav} className="absolute top-4 right-4 z-[100] md:hidden bg-gray-200 p-2 m-2 shadow-lg rounded-lg hover:scale-125 ease-in duration-200 cursor-pointer">
                <AiOutlineUnorderedList/>
            </a>
            {
                nav ? (
                    <div className="absolute top-0 right-0 z-[99] w-full h-screen bg-white/90 flex flex-col items-center md:hidden">
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-lg bg-gray-100 m-2 mt-5 p-2 shadow-lg hover:scale-110 ease-in duration-200">
                            <AiOutlineHome/>
                            <span className="pl-2">Home</span>
                        </a>
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-lg bg-gray-100 m-2 p-2 shadow-lg hover:scale-110 ease-in duration-200">
                            <AiOutlineFundProjectionScreen />
                            <span className="pl-2">Projects</span>
                        </a>
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-lg bg-gray-100 m-2 p-2 shadow-lg hover:scale-110 ease-in duration-200">
                            <AiOutlineAim/>
                            <span className="pl-2">Skills</span>
                        </a>
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-lg bg-gray-100 m-2 p-2 shadow-lg hover:scale-110 ease-in duration-200">
                            <AiOutlineMail/>
                            <span className="pl-2">Contact</span>
                        </a>
                    </div>
                ) : (
                    ''
                )
            }
            <div className="md:block hidden fixed top-[25%]">
                <div className="flex flex-col justify-center">
                    <a href="#main" className="bg-gray-200 p-4 m-4 shadow-lg hover:scale-125 ease-in duration-200">
                        <AiOutlineHome size={30}/>
                    </a>
                    <a href="#main" className="bg-gray-200 p-4 m-4 shadow-lg hover:scale-125 ease-in duration-200">
                        <AiOutlineFundProjectionScreen size={30}/>
                    </a>
                    <a href="#main" className="bg-gray-200 p-4 m-4 shadow-lg hover:scale-125 ease-in duration-200">
                        <AiOutlineAim size={30}/>
                    </a>
                    <a href="#main" className="bg-gray-200 p-4 m-4 shadow-lg hover:scale-125 ease-in duration-200">
                        <AiOutlineMail size={30}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;