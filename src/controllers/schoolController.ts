import { Request, Response } from 'express';
import { School } from '../models/School';
import { schoolService } from '../services/schoolService';

// Get all schools
export const getAllSchools = async (req: Request, res: Response) => {
    try {
        const schools = await schoolService.getAllSchools();
        res.status(200).json(schools);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving schools', error });
    }
};

// Get a school by ID
export const getSchoolById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const school = await schoolService.getSchoolById(id);
        if (!school) {
            return res.status(404).json({ message: 'School not found' });
        }
        res.status(200).json(school);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving school', error });
    }
};

// Create a new school
export const createSchool = async (req: Request, res: Response) => {
    const schoolData = req.body;
    try {
        const newSchool = await schoolService.createSchool(schoolData);
        res.status(201).json(newSchool);
    } catch (error) {
        res.status(500).json({ message: 'Error creating school', error });
    }
};

// Update a school by ID
export const updateSchool = async (req: Request, res: Response) => {
    const { id } = req.params;
    const schoolData = req.body;
    try {
        const updatedSchool = await schoolService.updateSchool(id, schoolData);
        if (!updatedSchool) {
            return res.status(404).json({ message: 'School not found' });
        }
        res.status(200).json(updatedSchool);
    } catch (error) {
        res.status(500).json({ message: 'Error updating school', error });
    }
};

// Delete a school by ID
export const deleteSchool = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedSchool = await schoolService.deleteSchool(id);
        if (!deletedSchool) {
            return res.status(404).json({ message: 'School not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting school', error });
    }
};