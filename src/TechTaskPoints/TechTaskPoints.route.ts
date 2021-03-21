const express = require('express');
import {addTechTaskPoint} from "./TechTaskPoints.service";

const router = express.Router()

router.post('/', addTechTaskPoint);

export default router;
