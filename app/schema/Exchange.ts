import mongoose, { Schema } from "mongoose";
import { IExchange } from "../interface/IExchange";

const ExchangeSchema: Schema<IExchange> = new Schema({
    ownerName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        validate: {
            validator: function(data: any) {
                if (data.startsWith('+261')) {
                    return !isNaN(data.split("+")[1]);
                } else {
                    return !isNaN(data);
                }
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: true,
        trim: true
    },
    toysName: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    exchangeWith:{
        type: String,
        required: true,
        trim: true
    },
    isAvalaible: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
});

export const Exchange = mongoose.model<IExchange>("Exchange", ExchangeSchema);
