// db.js (or connectDB.js)

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBKEY, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ DB connected successfully');
    } catch (error) {
        console.error('❌ Error connecting to DB:', error.message);
    }
}

export default connectDB;
