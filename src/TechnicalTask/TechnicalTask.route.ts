const express = require('express')
import {addTechTask, getPdfTechTask, getTechTaskByObjectId} from './TechnicalTask.service';

const router = express.Router()

router.get('/getByObjectId', getTechTaskByObjectId);
router.post('/', addTechTask);
router.get('/getPdfTechTask', getPdfTechTask);

export default router;
