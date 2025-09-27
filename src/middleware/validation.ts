import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// Middleware for validating incoming requests
const validateRequest = (validations: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
};

// Example validation for user registration
const validateUserRegistration = [
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Example validation for user login
const validateUserLogin = [
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Example validation for user signup
const validateSignup = validateRequest(validateUserRegistration);

// Example validation for user login
const validateLogin = validateRequest(validateUserLogin);

export { validateRequest, validateUserRegistration, validateUserLogin, validateSignup, validateLogin };
