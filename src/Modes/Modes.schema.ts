import mongoose, { Schema, Document } from "mongoose";

export interface ModeDTO extends Document {
    modeNo: string;
    modeName: string;
    description?: string;
}

const ModesSchema: Schema = new Schema({
    modeNo: { type: String, required: true },
    modeName: { type: String, required: true },
    description: { type: String }
});

const Modes = mongoose.model<ModeDTO>("Modes", ModesSchema);
export default Modes;
