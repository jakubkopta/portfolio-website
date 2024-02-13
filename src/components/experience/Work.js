"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkItems_tsx_1 = require("./WorkItems.tsx");
var Work = function () {
    var data = [];
    return (<div id="Skills" className="w-full bg-gray-200 p-6">
            <div className="ml-28 mr-28">
                {data.length > 0 ? (data.map(function (item, idx) { return (<WorkItems_tsx_1.default key={idx} company={item.company} title={item.title} duration={item.duration} details={item.details}/>); })) : (<p>No experience yet</p>)}
            </div>
        </div>);
};
exports.default = Work;
