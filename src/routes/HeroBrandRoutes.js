import express from 'express';
import upload from '../middlewares/multer.js';
import {
  createHeroBrand,
  getAllHeroBrands,
  updateHeroBrand,
  deleteHeroBrand,
} from '../controllers/HeroBrandController.js';

const router = express.Router();
git checkout
router.get('/', getAllHeroBrands);
router.post('/', upload.single('image'), createHeroBrand);
router.put('/:id', updateHeroBrand); // Optional: can support image update
router.delete('/:id', deleteHeroBrand);

export default router; 
