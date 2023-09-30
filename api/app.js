const express = require('express');
const app = express();
const cors = require('cors');
const tasks = require('./routes/tasks');
const auth = require('./routes/authentication')
const connectDB = require('./Database/connect');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
require('dotenv').config();
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




