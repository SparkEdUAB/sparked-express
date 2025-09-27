import express from 'express';
import { createTopic, getTopics, getTopicById, updateTopic, deleteTopic } from '../controllers/topicController';

const router = express.Router();

// Route to create a new topic
router.post('/', createTopic);

// Route to get all topics
router.get('/', getTopics);

// Route to get a topic by ID
router.get('/:id', getTopicById);

// Route to update a topic by ID
router.put('/:id', updateTopic);

// Route to delete a topic by ID
router.delete('/:id', deleteTopic);

export default router;