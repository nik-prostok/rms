import {addPiM, getPiMWithModes} from "./PiM.service";

const express = require('express')

const router = express.Router()

router.get('/', getPiMWithModes);
router.post('/', addPiM);

export default router;
