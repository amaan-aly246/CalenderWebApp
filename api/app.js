import express from 'express'
import cors from 'cors'
import tasks from './routes/tasks.js'
import auth from './routes/authentication.js'
import connectDB from './Database/connect.js';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 3000;
import { config } from 'dotenv';
config()
const app = express();

// Middleware
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());

// this middleware makes the cookies accessible to the web
app.use(cookieParser());

// Routes
app.use('/api/tasks', tasks);
app.use('/', auth);

const start = async () => {
    try {
        await connectDB(process.env.connectionString);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.log('error', error.message);
    }
}

start();




