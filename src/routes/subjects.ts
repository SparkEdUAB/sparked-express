import express from 'express';
import { SubjectController } from '../controllers/subjectController';

const router = express.Router();

// Get all subjects
router.get('/', SubjectController.getAllSubjects);

// Get a subject by ID
router.get('/:id', SubjectController.getSubjectById);

// Create a new subject
router.post('/', SubjectController.createSubject);

// Update a subject by ID
router.put('/:id', SubjectController.updateSubject);

// Delete a subject by ID
router.delete('/:id', SubjectController.deleteSubject);

export default router;