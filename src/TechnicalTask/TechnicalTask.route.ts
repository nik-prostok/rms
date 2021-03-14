const express = require('express')
import {addTechTask, getTechTaskByObjectId} from './TechnicalTask.service';

const router = express.Router()

router.get('/getByObjectId', getTechTaskByObjectId);
router.post('/', addTechTask);

export default router;
