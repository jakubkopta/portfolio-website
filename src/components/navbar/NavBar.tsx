import {useState} from "react";
import {
    AiOutlineAim,
    AiOutlineFundProjectionScreen, AiOutlineHeart,
    AiOutlineHome,
    AiOutlineMail, AiOutlineUnorderedList
} from "react-icons/ai";
import NavBarItems from "./NavBarItems.tsx";
import SideBarItems from "./SideBarItems.tsx";


const NavBar = () => {

    const data = [
        {
            name: "Home",
            icon: <AiOutlineHome/>
        },
        {
            name: "Experience",
            icon: <AiOutlineAim/>
        },
        {
            name: "Projects",
            icon: <AiOutlineFundProjectionScreen/>
        },
        {
            name: "Interests",
            icon: <AiOutlineHeart />
        },
        {
            name: "Contact",
            icon: <AiOutlineMail/>
        },

    ]

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div>
            <a onClick={handleNav} className="fixed top-4 right-4 z-[100] md:hidden bg-gray-200 p-2 m-2 shadow-lg rounded-lg hover:scale-125 ease-in duration-200 cursor-pointer">
                <AiOutlineUnorderedList/>
            </a>
            {
                nav ? (
                    <div className="fixed pt-14 top-0 z-[99] w-full h-screen bg-white/90 flex flex-col items-center md:hidden slide-down duration-300">
                        {data.map((item, idx) => (
                            <div onClick={handleNav} className="w-[75%]"><NavBarItems key={idx} name={item.name} icon={item.icon}/></div>
                        ))}
                    </div>
                ) : (
                    <div className="fixed top-0 z-[99] w-full h-screen bg-white/90 slide-up duration-300">
                    </div>
                )
            }
            <div className="md:block hidden fixed top-[25%]">
                <div className="flex flex-col justify-center">
                    {data.map((item, idx) => (
                        <SideBarItems key={idx} name={item.name} icon={item.icon}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavBar;