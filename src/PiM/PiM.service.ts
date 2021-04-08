import { Request, Response } from "express";
import PiMs from "./PiM.schema";

export const filesPath = 'C:\\Users\\nik\\Desktop\\uploads\\';

export const getPiMWithModes = async (req: Request, res: Response) => {
    try {
        const pims = await PiMs.find().populate('modes')
        res.send(pims);
    } catch (err) {
        res.send(err);
    }
};

export const addPiM = async (req: Request, res: Response) => {
    try {
        let sampleFile;
        let uploadPath;
        if (!req.files || Object.keys(req.files).length === 0) {
            throw ('No files were uploaded.');
        }

        sampleFile = req.files.pimDoc;
        // @ts-ignore
        uploadPath = filesPath + sampleFile.name;

        // @ts-ignore
        await sampleFile.mv(uploadPath);
        await new PiMs({
            namePiM: req.body.namePiM,
            // @ts-ignore
            nameDoc: sampleFile.name,
            targetObjectId: req.body.targetObjectId,
        }).save()
        res.send('File uploaded!');
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
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
