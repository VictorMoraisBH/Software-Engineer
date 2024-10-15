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
exports.getContacts = void 0;
const getContacts = (apiKey, page) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://http.msging.net/commands', {
        method: 'POST',
        headers: {
            Authorization: `Key ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: '1',
            to: 'postmaster@msging.net',
            method: 'get',
            uri: `/contacts?page=${page}`,
        }),
    });
    if (!response.ok) {
        throw new Error('Erro ao obter contatos');
    }
    const data = yield response.json();
    return data.resource.items;
});
exports.getContacts = getContacts;
