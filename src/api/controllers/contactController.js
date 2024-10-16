"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchContacts = void 0;
const blipService_1 = require("../services/utils/blipService");
const fetchContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const apiKey = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const page = req.query.page || 1;
    try {
        const contacts = yield (0, blipService_1.getContacts)(apiKey, page);
        res.json({ contacts });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar contatos' });
    }
});
exports.fetchContacts = fetchContacts;
