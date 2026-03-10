'use strict';

import express from 'express';
import logger from "./utils/logger.js";

const router = express.Router();



// importing routes

import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import mangaController from './controllers/manga.js';




// getting routes

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/manga', mangaController.createView);

export default router;
