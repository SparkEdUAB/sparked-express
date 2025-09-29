import { Subject } from '../models/Subject';
import { SubjectType } from '../types';
import { processCodes } from '../utils/processCodes';

export const createSubject = async (subjectData: SubjectType) => {
    try {
        const subject = new Subject(subjectData);
        await subject.save();
        return {
            success: true,
            data: subject,
            code: processCodes.CREATED,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const getAllSubjects = async () => {
    try {
        const subjects = await Subject.find();
        return {
            success: true,
            data: subjects,
            code: processCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const getSubjectById = async (id: string) => {
    try {
        const subject = await Subject.findById(id);
        if (!subject) {
            return {
                success: false,
                message: 'Subject not found',
                code: processCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            data: subject,
            code: processCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const updateSubject = async (id: string, subjectData: SubjectType) => {
    try {
        const subject = await Subject.findByIdAndUpdate(id, subjectData, { new: true });
        if (!subject) {
            return {
                success: false,
                message: 'Subject not found',
                code: processCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            data: subject,
            code: processCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const deleteSubject = async (id: string) => {
    try {
        const subject = await Subject.findByIdAndDelete(id);
        if (!subject) {
            return {
                success: false,
                message: 'Subject not found',
                code: processCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            message: 'Subject deleted successfully',
            code: processCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: processCodes.INTERNAL_SERVER_ERROR,
        };
    }
};