
import mongoose from 'mongoose';
const connectDB = async (connectionString) => {
    return mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

}


export default connectDB;