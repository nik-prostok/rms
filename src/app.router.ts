import express from 'express'
import targetObjectsRouter from "./TargetObjects/TargetObjects.router"

const appRouter = express.Router()

appRouter.use('/targetObjects', targetObjectsRouter)

export default appRouter;
