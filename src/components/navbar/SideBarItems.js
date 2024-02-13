"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SideBarItems = function (_a) {
    var icon = _a.icon, name = _a.name;
    var _b = (0, react_1.useState)(false), isHovered = _b[0], setIsHovered = _b[1];
    return (<>
            <a href={"#".concat(name)} className="relative bg-gray-200 p-4 ml-4 mt-4 shadow-lg hover:scale-125 ease-in duration-200" onMouseEnter={function () { return setIsHovered(true); }} onMouseLeave={function () { return setIsHovered(false); }}>
                {icon}
                {isHovered && (<div className="absolute bg-gray-100 p-2 shadow-md rounded-r-md left-full top-1">
                        {name}
                    </div>)}
            </a>
        </>);
};
exports.default = SideBarItems;
