import express from "express"
import notesRoutes from"./routes/notesRoutes.js";
const app = express()

app.listen(5002, () => {
    console.log("Server started on PORT: 5002");
});

app.use("/api/notes", notesRoutes)
