import mongoose, { Schema, Document } from "mongoose";
import {ModeDTO} from "../Modes/Modes.schema";

export interface PiMInterface extends Document {
    namePiM: string;
    description?: string;
    modes?: ModeDTO[];
    nameDoc: string;
    targetObjectId: string;
}

const PiMSchema: Schema = new Schema({
    namePiM: { type: String, required: true },
    targetObjectId: {type: String, required: true},
    modes: [{ type: Schema.Types.ObjectId, ref: 'Modes', required: false }],
    nameDoc: { type: String, required: true},
    description: { type: String }
});

const PiMs = mongoose.model<PiMInterface>("PiMs", PiMSchema);
export default PiMs;
