import { Schema, model, Document } from 'mongoose';

interface ITopic extends Document {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const TopicSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Topic = model<ITopic>('Topic', TopicSchema);

export default Topic;