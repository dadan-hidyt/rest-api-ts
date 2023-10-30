"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const models_1 = __importDefault(require("../models"));
const form = (0, multer_1.default)({
    dest: "/uploads"
});
const Api = (0, express_1.default)();
Api.post('/register', form.array("avatar"), function (req, res) {
    const user = req.body;
    res.json(models_1.default.UserModel.Register(user));
});
exports.default = Api;
