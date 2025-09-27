import { Request, Response } from 'express';
import Program from '../models/Program';
import { createProgram, getPrograms, getProgramById, updateProgram, deleteProgram } from '../services/programService';

// Create a new program
export const createProgramController = async (req: Request, res: Response) => {
    try {
        const programData = req.body;
        const newProgram = await createProgram(programData);
        res.status(201).json(newProgram);
    } catch (error) {
        res.status(500).json({ message: 'Error creating program', error });
    }
};

// Get all programs
export const getProgramsController = async (req: Request, res: Response) => {
    try {
        const programs = await getPrograms();
        res.status(200).json(programs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching programs', error });
    }
};

// Get a program by ID
export const getProgramByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const program = await getProgramById(id);
        if (!program) {
            return res.status(404).json({ message: 'Program not found' });
        }
        res.status(200).json(program);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching program', error });
    }
};

// Update a program
export const updateProgramController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const programData = req.body;
        const updatedProgram = await updateProgram(id, programData);
        if (!updatedProgram) {
            return res.status(404).json({ message: 'Program not found' });
        }
        res.status(200).json(updatedProgram);
    } catch (error) {
        res.status(500).json({ message: 'Error updating program', error });
    }
};

// Delete a program
export const deleteProgramController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedProgram = await deleteProgram(id);
        if (!deletedProgram) {
            return res.status(404).json({ message: 'Program not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting program', error });
    }
};