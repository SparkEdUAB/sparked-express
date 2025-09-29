import { Schema, model, Document } from 'mongoose';

interface ISchool extends Document {
    name: string;
    address: string;
    phone: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const schoolSchema = new Schema<ISchool>({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
}, {
    timestamps: true,
});

const School = model<ISchool>('School', schoolSchema);

export default School;