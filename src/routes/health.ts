import { Router } from "express";
import { Request } from "express";
export const router = Router();


router.get('/', (req: Request, res) => {
    throw new Error('Error from health');
    res.status(200).send({
        message:'OK from health',
        timestamp: req.timestamp
    });
});


