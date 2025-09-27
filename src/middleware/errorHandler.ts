import { Request, Response, NextFunction } from 'express';

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  const status = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(status).json({
    success: false,
    error: {
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack,
    },
  });
};

export default errorHandler;
