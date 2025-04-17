import { Request, Response, NextFunction } from 'express';

export interface CustomError extends Error {
    statusCode?: number;
}

export class ErrorHandler {
    handle(err: CustomError, req: Request, res: Response, next: NextFunction) {
        const statusCode = err.statusCode || 500;
        const message = err.message || 'Internal Server Error';

        res.status(statusCode).json({
            status: 'error',
            statusCode,
            message,
        });

        next();
    }
}