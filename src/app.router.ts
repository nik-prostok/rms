import express from 'express';
import targetObjectsRouter from "./TargetObjects/TargetObjects.router";
import modes from './Modes/Modes.route';
import pims from './PiM/PiM.route';
import techTask from './TechnicalTask/TechnicalTask.route';
import techTaskPoint from './TechTaskPoints/TechTaskPoints.route';

const appRouter = express.Router()

appRouter.use('/targetObjects', targetObjectsRouter)
appRouter.use('/modes', modes)
appRouter.use('/pims', pims)
appRouter.use('/techTask', techTask)
appRouter.use('/techTaskPoint', techTaskPoint)

export default appRouter;
