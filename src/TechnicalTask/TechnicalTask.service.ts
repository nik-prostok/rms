import { Request, Response } from "express";
import {TechnicalTask} from "./TechnicalTask.schema";
import * as path from "path";

export const filesPath = 'C:\\Users\\nik\\Desktop\\uploads\\';

export interface GetTechTaskByObjectIdReq {
    targetObjectId: string;
}
export const getTechTaskByObjectId = async (req: Request<null,null,null,GetTechTaskByObjectIdReq>, res: Response) => {
    try {
        const targetObjectId = req.query.targetObjectId;
        const techTasks = await TechnicalTask
            .find({targetObjectId})
            .populate('targetObjectId')
            .populate('techTaskPoints')
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
        res.send('File uploaded!');
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
};

export interface GetTechTaskPdfReq {
    techTaskId: string;
}

export const getPdfTechTask = async (req: Request<null,null,null,GetTechTaskPdfReq>, res: Response) => {
    try {
        const techTaskId = req.query.techTaskId;
        const techTask = await TechnicalTask
            .findOne({_id: techTaskId})
        console.log(techTask)
        if (techTask) {
            res.sendFile(path.join(filesPath + techTask.nameDoc))
        } else throw('File not found!')
    } catch (err) {
        res.send(err);
    }
}
