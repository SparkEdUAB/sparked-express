import { Router } from 'express';
import { createUnit, getUnits, getUnitById, updateUnit, deleteUnit } from '../controllers/unitController';

const router = Router();

// Route to create a new unit
router.post('/', createUnit);

// Route to get all units
router.get('/', getUnits);

// Route to get a unit by ID
router.get('/:id', getUnitById);

// Route to update a unit by ID
router.put('/:id', updateUnit);

// Route to delete a unit by ID
router.delete('/:id', deleteUnit);

export default router;