import {addMode, getAllModes} from "./Modes.service";

const express = require('express')

const router = express.Router()

router.get('/', getAllModes);
router.post('/', addMode);

export default router;
