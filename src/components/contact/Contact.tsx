import {FaFacebookF, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const Contact = () => {

    return (

        <div id="Contact" className="border-t-2 border-gray-800">
            <h1 className="text-5xl text-gray-800 text-center font-bold p-10">
                Contact
            </h1>
            <div className="relative p-20">
                <div className="bg-gray-600 absolute inset-0 z-[-1]"></div>
                <ul className="flex justify-center items-center gap-5 relative">
                    <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                        <div
                            className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                        </div>
                        <FaFacebookF size={30}/>
                    </li>
                    <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                        <div
                            className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                        </div>
                        <FaInstagram size={30}/>
                    </li>
                    <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                        <div
                            className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                        </div>
                        <FaLinkedin size={30}/>
                    </li>
                    <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                        <div
                            className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                        </div>
                        <FaGithub size={30}/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;