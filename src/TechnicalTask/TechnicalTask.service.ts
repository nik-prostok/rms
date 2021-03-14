import { Request, Response } from "express";
import {TechnicalTask} from "./TechnicalTask.schema";

export const filesPath = 'C:\\Users\\nik\\Desktop\\uploads\\';

export interface GetTechTaskByObjectIdReq {
    targetObjectId: string;
}

export const getTechTaskByObjectId = async (req: Request<GetTechTaskByObjectIdReq>, res: Response) => {
    try {
        console.log(req.body.targetObjectId)
        const techTasks = await TechnicalTask
            .find({targetObjectId: req.body.targetObjectId})
            .populate('targetObjectId')
        console.log(techTasks)
        res.send(techTasks);
    } catch (err) {
        res.send(err);
    }
};

export const addTechTask = async (req: Request, res: Response) => {
    try {
        let sampleFile;
        let uploadPath;
        if (!req.files || Object.keys(req.files).length === 0) {
            throw ('No files were uploaded.');
        }

        sampleFile = req.files.techTaskDoc;
        // @ts-ignore
        uploadPath = filesPath + sampleFile.name;

        // @ts-ignore
        await sampleFile.mv(uploadPath);
        await new TechnicalTask({
            titleTechTask: req.body.nameTechTask,
            // @ts-ignore
            nameDoc: sampleFile.name,
            targetObjectId: req.body.targetObjectId
        }).save();
        console.log(req.body)
        res.send('File uploaded!');
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
};
