"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavBarItems = function (_a) {
    var name = _a.name, icon = _a.icon;
    return (<>
            <a href={"#".concat(name)} className="flex justify-center items-center rounded-lg bg-gray-100 mt-5 p-2 shadow-lg hover:scale-110 ease-in duration-200">
                {icon}
                <span className="pl-2">{name}</span>
            </a>
        </>);
};
exports.default = NavBarItems;
