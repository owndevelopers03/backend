import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const cookiesSchema = new mongoose.Schema(
    {
        customId: {
            type: String,
            unique: true,
            default: () => nanoid(6),
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Cookies = mongoose.model('Cookies', cookiesSchema);
export default Cookies;
