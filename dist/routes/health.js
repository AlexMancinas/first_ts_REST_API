"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    throw new Error('Error from health');
    res.status(200).send({
        message: 'OK from health',
        timestamp: req.timestamp
    });
});
