import express from 'express';
import { getPersonDetails } from '../controllers/personController';

const router = express.Router();

router.get('/person', getPersonDetails);

export { router as personRoutes };
