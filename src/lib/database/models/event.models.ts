import { Schema, models, model, Document, Types } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date,
    imageUrl: string;
    startDateTime: Date;
    endDateTIme: Date;
    price?: String;
    isFree: Boolean;
    url?: string;
    category: {
        _id: string,
        name: string
    }
    orgaizer: {
        _id: string,
        firstName: string,
        lastName: string
    }
}


const EventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String,
        required: true
    },
    startDateTIme: {
        type: Date,
        default: Date.now
    },
    endDateTIme: {
        type: Date,
        default: Date.now
    },
    price: {
        type: String
    },
    isFree: {
        type: Boolean,
        default: false
    },
    url: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Event = models.Event || model('Event', EventSchema)

export default Event