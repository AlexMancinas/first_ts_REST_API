import { Request, Response, NextFunction } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err.stack);
    res.status(500).send({
        message: "Internal server error",
        timestamp: req.timestamp,
        error: err.message
    });
}
