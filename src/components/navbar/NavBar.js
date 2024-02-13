"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var NavBarItems_tsx_1 = require("./NavBarItems.tsx");
var SideBarItems_tsx_1 = require("./SideBarItems.tsx");
var NavBar = function () {
    var data = [
        {
            name: "Home",
            icon: <ai_1.AiOutlineHome />
        },
        {
            name: "Skills",
            icon: <ai_1.AiOutlineAim />
        },
        {
            name: "Projects",
            icon: <ai_1.AiOutlineFundProjectionScreen />
        },
        {
            name: "Interests",
            icon: <ai_1.AiOutlineHeart />
        },
        {
            name: "Contact",
            icon: <ai_1.AiOutlineMail />
        },
    ];
    var _a = (0, react_1.useState)(false), nav = _a[0], setNav = _a[1];
    var handleNav = function () {
        setNav(!nav);
    };
    return (<div>
            <a onClick={handleNav} className="fixed top-4 right-4 z-[100] md:hidden bg-gray-200 p-2 m-2 shadow-lg rounded-lg hover:scale-125 ease-in duration-200 cursor-pointer">
                <ai_1.AiOutlineUnorderedList />
            </a>
            {nav ? (<div className="fixed top-0 right-0 z-[99] w-full h-screen bg-white/90 flex flex-col items-center md:hidden animate-fadeIn">
                        {data.map(function (item, idx) { return (<div onClick={handleNav} className="w-[75%]"><NavBarItems_tsx_1.default key={idx} name={item.name} icon={item.icon}/></div>); })}
                    </div>) : ('')}
            <div className="md:block hidden fixed top-[25%]">
                <div className="flex flex-col justify-center">
                    {data.map(function (item, idx) { return (<SideBarItems_tsx_1.default key={idx} name={item.name} icon={item.icon}/>); })}
                </div>
            </div>
        </div>);
};
exports.default = NavBar;
