import { Router } from "express";
import { logger, validateCalculatorRequest } from "../middlewares";
import { Request } from "express";
import { ICalculatorRequestBody } from "../types";
export const router = Router();


router.get('/', (req: Request, res) => {
    res.status(200).send({
        message: 'OK from calculator',
        timestamp: req.timestamp,
        data: [
            { id: 1, result: 2 },
            { id: 2, result: 4 },
        ]
    });
});


router.get('/:id', (req, res) => {
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

router.post('/', validateCalculatorRequest ,(req: Request<{}, any, ICalculatorRequestBody>, res) => {
    // console.log(`req body: ${req.body}`);
    const { operator, operand1, operand2 } = req.body;
    let result: number | string;
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
    };

    res.send({
        message: "Create new calculation",
        timestamp: req.timestamp,
        result
    });
});
