import { Schema, model, Document } from 'mongoose';

interface IUnit extends Document {
    title: string;
    description: string;
    courseId: string; // Reference to the Course model
    createdAt: Date;
    updatedAt: Date;
}

const unitSchema = new Schema<IUnit>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    courseId: {
        type: String,
        required: true,
        ref: 'Course', // Assuming you have a Course model
    },
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const Unit = model<IUnit>('Unit', unitSchema);

export default Unit;