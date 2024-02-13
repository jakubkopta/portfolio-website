"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fa_1 = require("react-icons/fa");
var ai_1 = require("react-icons/ai");
var lu_1 = require("react-icons/lu");
var Contact = function () {
    return (<div id="Contact" className="border-t-2 border-gray-800">
            <h1 className="text-5xl text-gray-800 text-center font-bold p-5 bg-gray-200">
                Contact
            </h1>
            <div className="grid grid-cols-2 relative p-20">
                <div className="bg-gray-600 absolute inset-0 z-[-1]"></div>
                <div className="flex flex-col justify-between">
                    <p className="text-5xl text-white font-bold p-4 italic">
                        Get in Touch
                    </p>
                    <ol className="flex gap-5 relative">
                        <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                            <div className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                            </div>
                            <fa_1.FaFacebookF size={30}/>
                        </li>
                        <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                            <div className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                            </div>
                            <fa_1.FaInstagram size={30}/>
                        </li>
                        <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                            <div className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                            </div>
                            <fa_1.FaLinkedin size={30}/>
                        </li>
                        <li className="relative flex justify-center items-center text-white p-4 bg-gray-800 rounded-full cursor-pointer group hover:text-blue-200">
                            <div className="absolute top-0 left-0 bg-blue-200 h-full w-full rounded-full z-[-1] transition scale-90 group-hover:scale-125 group-hover:shadow-blue-200 group-hover:blur-sm">
                            </div>
                            <fa_1.FaGithub size={30}/>
                        </li>
                    </ol>
                </div>
                <div className="flex flex-row-reverse gap-10">
                    <div className="bg-gray-800 h-52 w-52 rounded-tl-3xl rounded-br-3xl relative shadow-xl">
                        <div className="flex flex-col justify-center items-center absolute h-52 w-52 -left-1 -top-1 hover:-left-2 hover:-top-2 bg-gray-400 rounded-tl-3xl rounded-br-3xl cursor-pointer">
                            <ai_1.AiOutlineMail size={30} className="mb-5"/>
                            <span className="italic font-bold">jakubkopta@gmail.com</span>
                        </div>
                    </div>
                    <div className="bg-gray-800 h-52 w-52 rounded-tl-3xl rounded-br-3xl relative shadow-xl">
                        <div className="flex flex-col justify-center items-center absolute h-52 w-52 -left-1 -top-1 hover:-left-2 hover:-top-2 bg-gray-400 rounded-tl-3xl rounded-br-3xl cursor-pointer">
                            <lu_1.LuFileSpreadsheet size={30} className="mb-5"/>
                            <span className="italic font-bold">CV</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = Contact;
