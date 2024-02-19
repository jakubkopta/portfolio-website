import {FaFacebookF, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {LuFileSpreadsheet} from "react-icons/lu";
import {AiOutlineMail} from "react-icons/ai";

const socialsData = [
    {
        link: "https://www.facebook.com/jakub.kopta",
        icon: <FaFacebookF size={30}/>
    },
    {
        link: "https://www.instagram.com/jakubkopta?igsh=MWhnN3BtbnJkNHBpeA%3D%3D&utm_source=qr",
        icon: <FaInstagram size={30}/>
    },
    {
        link: "https://www.linkedin.com/in/jakub-kopta-01109026b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        icon: <FaLinkedin size={30}/>
    },
    {
        link: "https://github.com/jakubkopta",
        icon: <FaGithub size={30}/>
    }

];

const contactData = [
    {
        name: "jakubkopta@gmail.com",
        link: "mailto:jakubkopta@gmail.com",
        icon: <AiOutlineMail size={40} className="mb-5"/>
    },
    {
        name: "CV",
        link: "./images/JakubKoptaCV.pdf",
        icon: <LuFileSpreadsheet size={40} className="mb-5"/>
    }
]

const footerNavBarData = [
    {
        name: "Home",
        link: "#Home"
    },
    {
        name: "Experience",
        link: "#Experience"
    },
    {
        name: "Projects",
        link: "#Projects"
    },
    {
        name: "Interests",
        link: "#Interests"
    }
]

export {contactData, socialsData, footerNavBarData};