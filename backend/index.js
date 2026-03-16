import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors());

// api's
app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT;


app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
})
