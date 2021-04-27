import {addPiM, getPdfPim, getPimsByObjectIdWithModes, getPiMWithModes} from "./PiM.service";
const express = require('express')

const router = express.Router()

router.get('/', getPiMWithModes);
router.post('/', addPiM);
router.get('/getPimByObjectId', getPimsByObjectIdWithModes);

router.get('/getPdfPim', getPdfPim);

export default router;
