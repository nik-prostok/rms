import { Request, Response } from "express";
import Modes from "./Modes.schema";

export const getAllModes = (req: Request, res: Response) => {
    const allModes = Modes.find((err: any, modes: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(modes);
        }
    });
};

export const addMode= (req: Request, res: Response) => {
    const mode = new Modes(req.body);
    mode.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(mode);
        }
    });
};
