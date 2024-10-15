"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const login_1 = __importDefault(require("./pages/login"));
const home_1 = __importDefault(require("./pages/home"));
const contact_1 = __importDefault(require("./pages/contact"));
const App = () => (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/login", element: react_1.default.createElement(login_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(home_1.default, null) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/contato/:id", element: react_1.default.createElement(contact_1.default, null) }))));
exports.default = App;
