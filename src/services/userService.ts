import { User } from '../models/User';
import { ProcessCodes } from '../utils/processCodes';

export const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return { success: true, data: user };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            return { success: false, message: 'User not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, data: user };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const updateUser = async (userId, updateData) => {
    try {
        const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!user) {
            return { success: false, message: 'User not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, data: user };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const deleteUser = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return { success: false, message: 'User not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, message: 'User deleted successfully' };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};