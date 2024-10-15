"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ text, onClick, className }) => (<button className={`p-2 bg-blue-500 text-white ${className}`} onClick={onClick}>
    {text}
  </button>);
exports.default = Button;
