import mongoose, { Schema, Document } from "mongoose";
import {SelectionCoordinates} from "../TechTaskPoints/TechTaskPoints.schema";

export interface ModeDTO extends Document {
    modeNo: string;
    modeName: string;
    description?: string;
    position: SelectionCoordinates;
}

const ModesSchema: Schema = new Schema({
    modeNo: { type: String, required: true },
    modeName: { type: String, required: true },
    description: { type: String },
    position: {
        boundingRect: {
            x1: Number,
            y1: Number,

            x2: Number,
            y2: Number,

            width: Number,
            height: Number,
        },
        pageNumber: {type: Number, required: true}
    },
});

const Modes = mongoose.model<ModeDTO>("Modes", ModesSchema);
export default Modes;
