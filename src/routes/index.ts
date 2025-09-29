import express from 'express';
import authRoutes from './auth';

const router = express.Router();

// Define routes
router.use('/auth', authRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is running!' });
});

export default router;
