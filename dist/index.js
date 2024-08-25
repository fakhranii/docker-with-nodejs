"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 4000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("<h1>hello mr zoz</h1>");
});
app.listen(PORT, () => {
    console.log(`Server is running on https://127.0.0.1:${PORT}`);
});
