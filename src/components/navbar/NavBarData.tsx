import {
    AiOutlineAim,
    AiOutlineFundProjectionScreen,
    AiOutlineHeart,
    AiOutlineHome,
    AiOutlineMail
} from "react-icons/ai";
import {IoGameControllerOutline} from "react-icons/io5";

const navBarData = [
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
        name: "Games",
        icon: <IoGameControllerOutline />
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

export {navBarData}