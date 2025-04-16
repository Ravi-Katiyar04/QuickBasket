import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import connectDB from './configs/db.js';
import 'dotenv/config';// Load environment variables from .env file
import userRouter from './routes/UserRoute.js'; // Import the user router



const app = express();
const port = process.env.PORT || 4000;

await connectDB(); // Connect to MongoDB

const allowedOrigins = [
    'http://localhost:5173', // React frontend
];


app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true })); // Allow requests from the frontend

app.get('/', (req, res) => {
    res.send(`Hello World! This is the backend server.`);
});

app.use('/api/users', userRouter); // Use the user router for user-related routes


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
