import { School } from '../models/School';
import { ProcessCodes } from '../utils/processCodes';

export const createSchool = async (schoolData) => {
    try {
        const newSchool = new School(schoolData);
        await newSchool.save();
        return { success: true, data: newSchool, code: ProcessCodes.CREATED };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const getSchools = async () => {
    try {
        const schools = await School.find();
        return { success: true, data: schools, code: ProcessCodes.OK };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const getSchoolById = async (id) => {
    try {
        const school = await School.findById(id);
        if (!school) {
            return { success: false, message: 'School not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, data: school, code: ProcessCodes.OK };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const updateSchool = async (id, schoolData) => {
    try {
        const updatedSchool = await School.findByIdAndUpdate(id, schoolData, { new: true });
        if (!updatedSchool) {
            return { success: false, message: 'School not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, data: updatedSchool, code: ProcessCodes.OK };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const deleteSchool = async (id) => {
    try {
        const deletedSchool = await School.findByIdAndDelete(id);
        if (!deletedSchool) {
            return { success: false, message: 'School not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, message: 'School deleted successfully', code: ProcessCodes.OK };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};