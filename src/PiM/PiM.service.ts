import { Request, Response } from "express";
import PiMs from "./PiM.schema";

export const getPiMWithModes = async (req: Request, res: Response) => {
    try {
        const pims = await PiMs.find().populate('modes')
        res.send(pims);
    } catch (err) {
        res.send(err);
    }
};

export const addPiM= (req: Request, res: Response) => {
    const PiM = new PiMs(req.body);
    PiM.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(PiM);
        }
    });
};

export interface GetPimsByObjectId {
    targetObjectId: string;
}
export const getPimsByObjectIdWithModes = async (req: Request<null, null, null, GetPimsByObjectId>, res: Response) => {
    try {
        const targetObjectId = req.query.targetObjectId;
        const pims = await PiMs
            .find({targetObjectId: targetObjectId})
            .populate('modes');
        res.send(pims);
    } catch (err) {
        res.send(err);
    }
}
