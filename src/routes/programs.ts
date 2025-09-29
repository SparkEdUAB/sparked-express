import { Router } from 'express';
import { createProgram, getPrograms, getProgramById, updateProgram, deleteProgram } from '../controllers/programController';

const router = Router();

// Route to create a new program
router.post('/', createProgram);

// Route to get all programs
router.get('/', getPrograms);

// Route to get a program by ID
router.get('/:id', getProgramById);

// Route to update a program by ID
router.put('/:id', updateProgram);

// Route to delete a program by ID
router.delete('/:id', deleteProgram);

export default router;