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
    try {
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
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            const errorData = yield response.json();
            throw new Error(`Erro ao obter contatos: ${errorData.reason || 'Erro desconhecido'}`);
        }
        const data = yield response.json();
        // Verifica se a estrutura dos dados está correta
        if (!data.resource || !data.resource.items) {
            throw new Error('A resposta não contém o campo "items" esperado');
        }
        // Retorna os itens de contatos
        return data.resource.items;
    }
    catch (error) {
        console.error(`Erro na requisição: ${error.message}`);
        throw new Error(`Falha ao obter contatos: ${error.message}`);
    }
});
exports.getContacts = getContacts;
