import { Schema, model, Document } from 'mongoose';

interface ISubject extends Document {
    name: string;
    description: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
}

const SubjectSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});

const Subject = model<ISubject>('Subject', SubjectSchema);

export default Subject;