import { Request, Response } from 'express';
import Subject from '../models/Subject';
import subjectService from '../services/subjectService';

// Get all subjects
export const getAllSubjects = async (req: Request, res: Response) => {
    try {
        const subjects = await subjectService.getAllSubjects();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving subjects', error });
    }
};

// Get a subject by ID
export const getSubjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const subject = await subjectService.getSubjectById(id);
        if (!subject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        res.status(200).json(subject);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving subject', error });
    }
};

// Create a new subject
export const createSubject = async (req: Request, res: Response) => {
    const newSubject = req.body;
    try {
        const createdSubject = await subjectService.createSubject(newSubject);
        res.status(201).json(createdSubject);
    } catch (error) {
        res.status(500).json({ message: 'Error creating subject', error });
    }
};

// Update a subject by ID
export const updateSubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedSubject = await subjectService.updateSubject(id, updatedData);
        if (!updatedSubject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(500).json({ message: 'Error updating subject', error });
    }
};

// Delete a subject by ID
export const deleteSubject = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedSubject = await subjectService.deleteSubject(id);
        if (!deletedSubject) {
            return res.status(404).json({ message: 'Subject not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting subject', error });
    }
};