"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavBar_tsx_1 = require("./components/navbar/NavBar.tsx");
var Main_tsx_1 = require("./components/Main.tsx");
require("./App.css");
var Projects_tsx_1 = require("./components/project/Projects.tsx");
var Interests_tsx_1 = require("./components/interests/Interests.tsx");
var Contact_tsx_1 = require("./components/contact/Contact.tsx");
var Experience_tsx_1 = require("./components/experience/Experience.tsx");
function App() {
    return (<div>
        <Main_tsx_1.default />
        <Experience_tsx_1.default />
        <Projects_tsx_1.default />
        <Interests_tsx_1.default />
        <Contact_tsx_1.default />
        <NavBar_tsx_1.default />
    </div>);
}
exports.default = App;
