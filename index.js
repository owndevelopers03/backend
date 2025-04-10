import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db.js'; // add .js extension for ESM
import cookiesRouter from './Routes/Cookies.route.js';
import { deleteMany } from './Controllers/Cookies.controller.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.use('/api/bakes', cookiesRouter)

app.listen(process.env.PORT, () => {
    console.log(`server started on ${process.env.PORT}`)
})
connectDB();

// deleteMany();

