import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";


const app = express()

connectDB();

app.listen(5002, () => {
    console.log("Server started on PORT: 5002");
});

app.use("/api/notes", notesRoutes)



//mongodb+srv://abenezeradev:79LsXQyzfYPFK5nV@cluster0.z982czi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0