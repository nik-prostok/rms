import mongoose, { Schema, Document } from "mongoose";

export interface TargetObjectsDTO extends Document {
    name: string;
}

const TargetObjectsSchema: Schema = new Schema({
    name: { type: String, required: true },
});

const TargetObjects = mongoose.model<TargetObjectsDTO>("TargetObjects", TargetObjectsSchema);
export default TargetObjects;
