"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkItem = function (_a) {
    var company = _a.company, title = _a.title, duration = _a.duration, details = _a.details;
    return (<div>
            <ol>
                <li>
                    <p>
                       <span className="p-2 bg-blue-500 rounded-lg font-bold">{company}</span>
                       <span className="p-2 font-bold text-blue-500">{title}</span>
                       <span className="p-2 font-bold text-black">{duration}</span>
                    </p>
                    <p className="p-4 shadow-lg m-6">{details}</p>
                </li>
            </ol>
        </div>);
};
exports.default = WorkItem;
