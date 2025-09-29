import express from 'express';
import { createSchool, getSchools, getSchoolById, updateSchool, deleteSchool } from '../controllers/schoolController';

const router = express.Router();

// Route to create a new school
router.post('/', createSchool);

// Route to get all schools
router.get('/', getSchools);

// Route to get a school by ID
router.get('/:id', getSchoolById);

// Route to update a school by ID
router.put('/:id', updateSchool);

// Route to delete a school by ID
router.delete('/:id', deleteSchool);

export default router;