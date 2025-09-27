import { Schema, model, Document } from 'mongoose';

interface IProgram extends Document {
    name: string;
    description: string;
    duration: number; // Duration in months
    createdAt: Date;
    updatedAt: Date;
}

const programSchema = new Schema<IProgram>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    duration: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Program = model<IProgram>('Program', programSchema);

export default Program;