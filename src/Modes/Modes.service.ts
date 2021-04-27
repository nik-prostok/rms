import { Request, Response } from "express";
import Modes from "./Modes.schema";
import PiMs from "../PiM/PiM.schema";

export const getAllModes = (req: Request, res: Response) => {
    const allModes = Modes.find((err: any, modes: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(modes);
        }
    });
};

export const addMode = async (req: Request, res: Response) => {
    try {
        const mode = new Modes(req.body);
        await mode.save();

        const pim = await PiMs.findOne({_id: req.body.pimId});
        if (pim && pim.modes) {
            pim.modes.push(mode._id)
            await pim.save();
        }
        res.send(mode);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};
