import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
dotenv.config();

const app = express()

connectDB();

app.use(express.json())

app.listen(5002, () => {
    console.log("Server started on PORT: 5002");
});

app.use("/api/notes", notesRoutes)



