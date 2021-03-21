import {Request, Response} from "express";

import {SelectionCoordinates, TechTaskPoint} from './TechTaskPoints.schema';
import {TechnicalTask} from "../TechnicalTask/TechnicalTask.schema";

export interface AddTechTaskPointReq {
    noPoint: string;
    description: string;
    modeId: string;
    position: SelectionCoordinates[];
    techTaskId: string;
}
export const addTechTaskPoint = async (req: Request<null, null, AddTechTaskPointReq>, res: Response) => {
    try {
        const techTaskPoint = new TechTaskPoint(req.body);
        await techTaskPoint.save();

        const techTask = await TechnicalTask.findOne({_id: req.body.techTaskId});
        if (techTask && techTask.techTaskPoints) {
            techTask.techTaskPoints.push(techTaskPoint._id)
            await techTask.save();
        }
        res.send(techTaskPoint);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
