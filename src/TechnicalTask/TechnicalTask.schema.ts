import mongoose, { Schema, Document } from "mongoose";

export interface TechnicalTaskDTO extends Document {
    titleTechTask: string;
    nameDoc: string;
    targetObjectId: string;
}

const TechnicalTaskSchema: Schema = new Schema({
    titleTechTask: { type: String, required: true },
    nameDoc: { type: String, required: true },
    targetObjectId: { type: Schema.Types.ObjectId, ref: 'TargetObjects', required: true}
});

export const TechnicalTask = mongoose.model<TechnicalTaskDTO>("TechnicalTask", TechnicalTaskSchema);
