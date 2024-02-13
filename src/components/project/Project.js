"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Project = function (_a) {
    var name = _a.name, imagePath = _a.imagePath, language = _a.language, icon = _a.icon;
    return (<div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
            <img className="w-full h-52 object-cover bg-bottom" src={imagePath} alt=""/>
            <div className="text-center m-4">
                <span className="font-bold">{name}</span>
            </div>
            <div className="bg-red-100 border-2 border-red-200 text-gray-700 text-sm font-bold rounded-full p-2 absolute top-0 m-2">
                {icon}<span>{language}</span>
            </div>
        </div>);
};
exports.default = Project;
