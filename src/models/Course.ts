import { Schema, model, Document } from 'mongoose';

interface ICourse extends Document {
    title: string;
    description: string;
    duration: number; // Duration in hours
    createdAt: Date;
    updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Course = model<ICourse>('Course', CourseSchema);

export default Course;