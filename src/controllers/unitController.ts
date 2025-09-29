import { Request, Response } from 'express';
import UnitService from '../services/unitService';

// Get all units
export const getAllUnits = async (req: Request, res: Response) => {
    try {
        const units = await UnitService.getAllUnits();
        res.status(200).json(units);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving units', error });
    }
};

// Get a unit by ID
export const getUnitById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const unit = await UnitService.getUnitById(id);
        if (unit) {
            res.status(200).json(unit);
        } else {
            res.status(404).json({ message: 'Unit not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving unit', error });
    }
};

// Create a new unit
export const createUnit = async (req: Request, res: Response) => {
    const newUnit = req.body;
    try {
        const createdUnit = await UnitService.createUnit(newUnit);
        res.status(201).json(createdUnit);
    } catch (error) {
        res.status(500).json({ message: 'Error creating unit', error });
    }
};

// Update a unit by ID
export const updateUnit = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedUnit = req.body;
    try {
        const unit = await UnitService.updateUnit(id, updatedUnit);
        if (unit) {
            res.status(200).json(unit);
        } else {
            res.status(404).json({ message: 'Unit not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating unit', error });
    }
};

// Delete a unit by ID
export const deleteUnit = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await UnitService.deleteUnit(id);
        if (result) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Unit not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting unit', error });
    }
};