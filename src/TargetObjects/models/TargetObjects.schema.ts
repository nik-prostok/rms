import mongoose, { Schema, Document } from "mongoose";

export interface TargetObjectsInterface extends Document {
    name: string;
}

const TargetObjectsSchema: Schema = new Schema({
    name: { type: String, required: true },
});

const TargetObjects = mongoose.model<TargetObjectsInterface>("TargetObjects", TargetObjectsSchema);
export default TargetObjects;
