import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}))
app.use(cookieParser());


export default app;