import { Program } from '../models/Program';
import { IProgram } from '../types';
import { processCodes } from '../utils/processCodes';

export const createProgram = async (programData: IProgram) => {
    try {
        const newProgram = new Program(programData);
        await newProgram.save();
        return {
            success: true,
            data: newProgram,
            code: processCodes.CREATED,
        };
    } catch (error) {
        throw {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const getPrograms = async () => {
    try {
        const programs = await Program.find();
        return {
            success: true,
            data: programs,
            code: processCodes.OK,
        };
    } catch (error) {
        throw {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const getProgramById = async (id: string) => {
    try {
        const program = await Program.findById(id);
        if (!program) {
            throw {
                success: false,
                message: 'Program not found',
                code: processCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            data: program,
            code: processCodes.OK,
        };
    } catch (error) {
        throw {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const updateProgram = async (id: string, programData: IProgram) => {
    try {
        const updatedProgram = await Program.findByIdAndUpdate(id, programData, { new: true });
        if (!updatedProgram) {
            throw {
                success: false,
                message: 'Program not found',
                code: processCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            data: updatedProgram,
            code: processCodes.OK,
        };
    } catch (error) {
        throw {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const deleteProgram = async (id: string) => {
    try {
        const deletedProgram = await Program.findByIdAndDelete(id);
        if (!deletedProgram) {
            throw {
                success: false,
                message: 'Program not found',
                code: processCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            message: 'Program deleted successfully',
            code: processCodes.OK,
        };
    } catch (error) {
        throw {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};