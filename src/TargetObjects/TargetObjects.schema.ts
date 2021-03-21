import mongoose, { Schema, Document } from "mongoose";

export interface TargetObjectsDTO extends Document {
    officialName: string;
}

const TargetObjectsSchema: Schema = new Schema({
    officialName: { type: String, required: true },
});

const TargetObjects = mongoose.model<TargetObjectsDTO>("TargetObjects", TargetObjectsSchema);
export default TargetObjects;
