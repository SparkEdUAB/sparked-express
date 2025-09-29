import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import routes from './routes';
import errorHandler from './middleware/errorHandler';
import connectToDatabase from './config/database';

const app = express();

// Middleware setup
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Connect to the database
connectToDatabase();

// Routes setup
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

export default app;
