import mongoose, { Schema, Document } from "mongoose";

export type SelectionCoordinates = {
    boundingRect: {
        x1: number;
        y1: number;

        x2: number;
        y2: number;

        width: number;
        height: number;
    },
    pageNumber: number
}

export interface TechTaskPointDTO extends Document {
    noPoint: string;
    description: string;
    modeId: string;
    position: SelectionCoordinates;
}

const TechTaskPointSchema: Schema = new Schema({
    noPoint: { type: String, required: true },
    description: { type: String, required: true },
    modeId: {type: Schema.Types.ObjectId, ref: 'Modes'},
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

export const TechTaskPoint = mongoose.model<TechTaskPointDTO>("TechTaskPoint", TechTaskPointSchema);
