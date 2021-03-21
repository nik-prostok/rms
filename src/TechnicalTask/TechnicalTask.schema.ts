import mongoose, { Schema, Document } from "mongoose";
import {TechTaskPointDTO} from "../TechTaskPoints/TechTaskPoints.schema";

export interface TechnicalTaskDTO extends Document {
    titleTechTask: string;
    nameDoc: string;
    targetObjectId: string;
    techTaskPoints?: TechTaskPointDTO[];
}

const TechnicalTaskSchema: Schema = new Schema({
    titleTechTask: { type: String, required: true },
    nameDoc: { type: String, required: true },
    techTaskPoints: [{
        type: Schema.Types.ObjectId,
        ref: 'TechTaskPoint'
    }],
    targetObjectId: { type: Schema.Types.ObjectId, ref: 'TargetObjects', required: true}
});

export const TechnicalTask = mongoose.model<TechnicalTaskDTO>("TechnicalTask", TechnicalTaskSchema);
