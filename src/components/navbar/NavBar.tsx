import {useState} from "react";
import {AiOutlineUnorderedList} from "react-icons/ai";
import NavBarItems from "./NavBarItems.tsx";
import SideBarItems from "./SideBarItems.tsx";
import {navBarData} from "./NavBarData.tsx";

interface Props {
    isDarkMode: boolean;
}

const NavBar = ({isDarkMode}:Props) => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <a onClick={handleNav} className="bg-gray-200 shadow-lg rounded-lg p-2 m-2 fixed top-4 right-4 z-[100] cursor-pointer md:hidden
            active:bg-gray-400 active:duration-0 hover:scale-125 ease-in duration-200">
                <AiOutlineUnorderedList/>
            </a>
            {
                nav ? (
                    <div className={`flex flex-col items-center w-full h-screen ${isDarkMode ? "bg-dark-mode/90" : "bg-white/90"} fixed pt-14 top-0 z-[99] md:hidden slide-down duration-300`}>
                        {navBarData.map((item, idx) => (
                            <div key={idx} onClick={handleNav} className="w-[75%]">
                                <NavBarItems name={item.name} icon={item.icon}/>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={`w-full h-screen ${isDarkMode ? "bg-dark-mode/90" : "bg-white/90"} fixed top-0 z-[99] slide-up duration-300 md:hidden`}>
                    </div>
                )
            }
            <div className="fixed top-[25%] hidden md:block">
                <div className="flex flex-col justify-center">
                    {navBarData.map((item, idx) => (
                        <SideBarItems key={idx} name={item.name} icon={item.icon}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;