import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimit from 'express-rate-limit';
dotenv.config( {path: './devcontainer.env'});
import cors from "cors";
const app = express()



app.use(express.json())

const limiter = rateLimit({
    windowMs: 1 * 60 ^ 1000,
    max: 100,
})

app.use(limiter);
app.use(cors({
    origin:"http://localhost:5173",
}));

//app.use((req, res, next) => {
//    console.log("req method is ${req.method}");
//    next();
//})

connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Server started on PORT: 5001")
    });
});

app.use("/api/notes", notesRoutes)



