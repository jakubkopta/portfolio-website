import {FaFacebookF, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {LuFileSpreadsheet} from "react-icons/lu";

const Contact = () => {

    return (

        <div id="Contact" className="border-t-2 border-gray-800">
            <div className="flex justify-center items-center gap-10 text-xl text-gray-600 font-bold p-5 bg-gray-200">
                <div className="flex flex-col md:flex-row text-center">
                    <a href={"#Home"} className="md:pr-10 hover:underline">Home</a>
                    <a href={"#Experience"} className="hover:underline">Experience</a>
                </div>
                <div  className="flex flex-col md:flex-row text-center">
                    <a href={"#Projects"} className="md:pr-10 hover:underline">Projects</a>
                    <a href={"#Interests"} className="hover:underline">Interests</a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 relative p-20">
                <div className="bg-gray-600 absolute inset-0 z-[-1]"></div>
                <div className="flex flex-col items-center justify-between">
                    <p className="text-5xl text-gray-200 font-bold mb-10 italic">
                        Get in Touch
                    </p>
                    <div>
                        <ol className="flex gap-5 relative">
                            <a href="https://www.facebook.com/jakub.kopta">
                                <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                                    <div
                                        className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                                    </div>
                                    <FaFacebookF size={30}/>
                                </li>
                            </a>
                            <a href="https://www.instagram.com/jakubkopta?igsh=MWhnN3BtbnJkNHBpeA%3D%3D&utm_source=qr">
                                <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                                    <div
                                        className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                                    </div>
                                    <FaInstagram size={30}/>
                                </li>
                            </a>
                            <a href="https://www.linkedin.com/in/jakub-kopta-01109026b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                                    <div
                                        className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                                    </div>
                                    <FaLinkedin size={30}/>
                                </li>
                            </a>
                            <a href="https://github.com/jakubkopta">
                                <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                                    <a href="https://github.com/jakubkopta"></a>
                                    <div
                                        className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                                    </div>
                                    <FaGithub size={30}/>
                                </li>
                            </a>
                        </ol>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse gap-10">
                    <div className="bg-gray-800 h-52 w-52 rounded-tl-3xl rounded-br-3xl relative shadow-xl">
                        <a href="mailto:jakubkopta@gmail.com">
                            <div
                                className="flex flex-col justify-center items-center absolute h-52 w-52 -left-1 -top-1 hover:-left-2 hover:-top-2 ease-in duration-300 bg-gray-400 rounded-tl-3xl rounded-br-3xl cursor-pointer text-gray-200">
                                <AiOutlineMail size={40} className="mb-5"/>
                                <span className="italic font-bold">jakubkopta@gmail.com</span>
                            </div>
                        </a>
                    </div>
                    <div className="bg-gray-800 h-52 w-52 rounded-tl-3xl rounded-br-3xl relative shadow-xl">
                        <a href="./images/JakubKoptaCV.pdf">
                            <div
                                className="flex flex-col justify-center items-center absolute h-52 w-52 -left-1 -top-1 hover:-left-2 hover:-top-2 ease-in duration-300 bg-gray-400 rounded-tl-3xl rounded-br-3xl cursor-pointer text-gray-200">
                                <LuFileSpreadsheet size={40} className="mb-5"/>
                                <span className="italic font-bold">CV</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;