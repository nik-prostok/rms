import {addPiM, getPimsByObjectIdWithModes, getPiMWithModes} from "./PiM.service";

const express = require('express')

const router = express.Router()

router.get('/', getPiMWithModes);
router.post('/', addPiM);
router.get('/getPimByObjectId', getPimsByObjectIdWithModes);

export default router;
