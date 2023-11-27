"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.status(200).send({
        message: 'OK from calculator',
        timestamp: req.timestamp,
        data: [
            { id: 1, result: 2 },
            { id: 2, result: 4 },
        ]
    });
});
exports.router.get('/:id', (req, res) => {
    console.log(`req.params.id: ${req.params.id}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Method: ${req.method}`);
    console.log(`Path: ${req.path}`);
    console.log(`Query parameters: ${JSON.stringify(req.query)}`);
    console.log(`RawHeaders: ${req.rawHeaders}`);
    console.log(`RawTrailers: ${req.rawTrailers}`);
    console.log(`Route: ${req.route}`);
    console.log(`Secure: ${req.secure}`);
    console.log(`Stale: ${req.stale}`);
    console.log(`Subdomains: ${req.subdomains}`);
    console.log(`Xhr: ${req.xhr}`);
    res.status(200).send({
        message: "Get calculator by id",
        id: req.params.id,
        result: 1
    });
});
exports.router.post('/', middlewares_1.validateCalculatorRequest, (req, res) => {
    // console.log(`req body: ${req.body}`);
    const { operator, operand1, operand2 } = req.body;
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    ;
    res.send({
        message: "Create new calculation",
        timestamp: req.timestamp,
        result
    });
});
