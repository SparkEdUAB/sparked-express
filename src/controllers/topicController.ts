import { Request, Response } from 'express';
import { Topic } from '../models/Topic';
import { topicService } from '../services/topicService';

// Get all topics
export const getAllTopics = async (req: Request, res: Response) => {
    try {
        const topics = await topicService.getAllTopics();
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving topics', error });
    }
};

// Get a single topic by ID
export const getTopicById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const topic = await topicService.getTopicById(id);
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }
        res.status(200).json(topic);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving topic', error });
    }
};

// Create a new topic
export const createTopic = async (req: Request, res: Response) => {
    const newTopic = req.body;
    try {
        const createdTopic = await topicService.createTopic(newTopic);
        res.status(201).json(createdTopic);
    } catch (error) {
        res.status(500).json({ message: 'Error creating topic', error });
    }
};

// Update an existing topic
export const updateTopic = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedTopic = await topicService.updateTopic(id, updatedData);
        if (!updatedTopic) {
            return res.status(404).json({ message: 'Topic not found' });
        }
        res.status(200).json(updatedTopic);
    } catch (error) {
        res.status(500).json({ message: 'Error updating topic', error });
    }
};

// Delete a topic
export const deleteTopic = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedTopic = await topicService.deleteTopic(id);
        if (!deletedTopic) {
            return res.status(404).json({ message: 'Topic not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting topic', error });
    }
};