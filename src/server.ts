import express from 'express';
import { json } from 'body-parser';
import connectToDatabase from './config/database';
import routes from './routes';
import errorHandler from './middleware/errorHandler';
import environment from './config/environment';

const app = express();

// Middleware
app.use(json());

// Connect to the database
connectToDatabase();

// Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = environment.port || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
