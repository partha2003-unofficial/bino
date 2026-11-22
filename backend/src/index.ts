import express from "express";
import cookiePerser from 'cookie-parser'
import cors from 'cors'
import userRouter from './router/user.router.ts';
import { connectWithDatabase } from './config/db.connector.ts';
import { env } from "./lib/env.ts";


const application = express();

connectWithDatabase(env.MONGODB_URL)

application.use(express.urlencoded({ extended: true }));
application.use(express.json())
application.use(cookiePerser())

application.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

application.use('/api/v1/user', userRouter)

application.listen(env.PORT, () => console.log('server is running ...'))