import express from 'express';
import {
  createStudio,
  getStudios,
  getStudio,
  updateStudio,
  deleteStudio
} from '../controllers/studioController';

const router = express.Router();

router.post('/', createStudio);
router.get('/', getStudios);
router.get('/:id', getStudio);
router.put('/:id', updateStudio);
router.delete('/:id', deleteStudio);

export default router; 