import { Request, Response } from "express";
import TargetObjects from "./models/TargetObjects.schema";

export const allTargetObjects = (req: Request, res: Response) => {
    const targetObjects = TargetObjects.find((err: any, targetObjects: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(targetObjects);
        }
    });
};

export const addTargetObject = (req: Request, res: Response) => {
    const targetObject = new TargetObjects(req.body);
    targetObject.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(targetObject);
        }
    });
};
