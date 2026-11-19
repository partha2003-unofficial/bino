import env from 'dotenv';
env.config();
import express from "express";
import userRouter from './src/router/user.router.ts';
import { connectWithDatabase } from './src/config/db.connector.ts';


const application = express();

connectWithDatabase(process.env.MONGODB_URL || "null")

application.use(express.urlencoded({ extended: true }));
application.use(express.json())

application.use('/api/v1/user', userRouter)