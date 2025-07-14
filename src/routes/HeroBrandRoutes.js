import express from 'express';
import upload from '../utils/multer.js';
import {
  createHeroBrand,
   
} from '../controllers/HeroBrandController.js';
 
const router = express.Router();
router.get('/', getAllHeroBrands);
router.post('/', upload.single('image'), createHeroBrand);
 router.put('/:id', updateHeroBrand); // Optional: can support image update
 router.delete('/:id', deleteHeroBrand);

export default router;  
