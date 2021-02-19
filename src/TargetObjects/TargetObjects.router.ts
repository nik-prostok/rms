const express = require('express')
import {allTargetObjects, addTargetObject} from "./TargetObjects.service";

const router = express.Router()

router.get('/', allTargetObjects);
router.post('/', addTargetObject);

export default router;
