import express from "express";
import {json} from 'body-parser';
import {managerRouter} from "./routes/manager";
import cors from 'cors';
import { connect } from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI ='mongodb://127.0.0.1:27017/money';
        await connect(mongoURI);
        console.log("MongoDB Connected hai guys haru...");
    } catch (err) {
        console.error('errr happened');
        // Exit process with failure
    }
};
const app =express();
app.use(cors());

connectDB();

const PORT = 8000;
app.use(json());
app.use("/",managerRouter);
app.listen(PORT,()=>{
    console.log(`Sever is listening on port ${PORT}`);
})

