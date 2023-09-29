const express = require('express');
const app = express();
const cors = require('cors');
const tasks = require('./routes/tasks');
const auth = require('./routes/authentication')
const connectDB = require('./Database/connect');
const port = process.env.PORT || 3000;
require('dotenv').config();
// Middleware
app.use(cors());
app.use(express.json());

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




