import { Router } from 'express';
import authController from './authController';
import courseController from './courseController';
import programController from './programController';
import schoolController from './schoolController';
import subjectController from './subjectController';
import topicController from './topicController';
import unitController from './unitController';
import userController from './userController';

const router = Router();

// Authentication routes
router.use('/auth', authController);

// Course routes
router.use('/courses', courseController);

// Program routes
router.use('/programs', programController);

// School routes
router.use('/schools', schoolController);

// Subject routes
router.use('/subjects', subjectController);

// Topic routes
router.use('/topics', topicController);

// Unit routes
router.use('/units', unitController);

// User routes
router.use('/users', userController);

export default router;