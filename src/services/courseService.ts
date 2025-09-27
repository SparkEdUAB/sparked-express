import { Course } from '../models/Course';
import { ProcessCodes } from '../utils/processCodes';

export const createCourse = async (courseData) => {
    try {
        const newCourse = new Course(courseData);
        await newCourse.save();
        return {
            success: true,
            data: newCourse,
            code: ProcessCodes.CREATED,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: ProcessCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const getCourses = async () => {
    try {
        const courses = await Course.find();
        return {
            success: true,
            data: courses,
            code: ProcessCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: ProcessCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const getCourseById = async (id) => {
    try {
        const course = await Course.findById(id);
        if (!course) {
            return {
                success: false,
                message: 'Course not found',
                code: ProcessCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            data: course,
            code: ProcessCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: ProcessCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const updateCourse = async (id, courseData) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, courseData, { new: true });
        if (!updatedCourse) {
            return {
                success: false,
                message: 'Course not found',
                code: ProcessCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            data: updatedCourse,
            code: ProcessCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: ProcessCodes.INTERNAL_SERVER_ERROR,
        };
    }
};

export const deleteCourse = async (id) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return {
                success: false,
                message: 'Course not found',
                code: ProcessCodes.NOT_FOUND,
            };
        }
        return {
            success: true,
            message: 'Course deleted successfully',
            code: ProcessCodes.OK,
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            code: ProcessCodes.INTERNAL_SERVER_ERROR,
        };
    }
};