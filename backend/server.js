import express from "express"
const app = express()

app.listen(5002, () => {
    console.log("Server started on PORT: 5002");
});

app.get("/api/notes", (req, res) => {
    res.send("you got 5 notes");
});