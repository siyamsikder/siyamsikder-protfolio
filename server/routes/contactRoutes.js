import express from 'express';
import { createContactMessage, getContactMessages } from '../controllers/contactController.js';

const router = express.Router();

router.route('/')
    .get(getContactMessages)    // For Admin Dashboard to read messages
    .post(createContactMessage); // For public website to send messages

export default router;
