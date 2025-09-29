import { Topic } from '../models/Topic';
import { ProcessCodes } from '../utils/processCodes';

export const createTopic = async (data: any) => {
    try {
        const topic = new Topic(data);
        await topic.save();
        return { success: true, data: topic };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const getTopics = async () => {
    try {
        const topics = await Topic.find();
        return { success: true, data: topics };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const getTopicById = async (id: string) => {
    try {
        const topic = await Topic.findById(id);
        if (!topic) {
            return { success: false, message: 'Topic not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, data: topic };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const updateTopic = async (id: string, data: any) => {
    try {
        const topic = await Topic.findByIdAndUpdate(id, data, { new: true });
        if (!topic) {
            return { success: false, message: 'Topic not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, data: topic };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};

export const deleteTopic = async (id: string) => {
    try {
        const topic = await Topic.findByIdAndDelete(id);
        if (!topic) {
            return { success: false, message: 'Topic not found', code: ProcessCodes.NOT_FOUND };
        }
        return { success: true, message: 'Topic deleted successfully' };
    } catch (error) {
        return { success: false, message: error.message, code: ProcessCodes.INTERNAL_SERVER_ERROR };
    }
};