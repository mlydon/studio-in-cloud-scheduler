import express from 'express';
import { getCrews, createCrew } from '../controllers/crewController';

const router = express.Router();

router.get('/', getCrews);
router.post('/', createCrew);

export default router; 