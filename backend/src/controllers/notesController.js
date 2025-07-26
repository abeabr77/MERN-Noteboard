import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1}); //shows newest note first
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error");
        res.status(500).json({message: "server error"})
    }
};

export async function getNoteById(req, res) {
    try{
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({message: "note not found"})
        res.json(note);
    } catch (error) {
        console,error("error");
        res.status(500).json({message: "server errpr"});
    }
}

export async function createNote(req, res) {
    try {
        const {title, content} = req.body
        const Note = new Note({title, content})

        const savedNote = await Note.save()
        res.status(201).json({message:"Note created succesfully"})
    } catch (error) {
        console.error("Error");
        res.status(500).json({ message:"server error"});
    }
};

export async function updateNote(req, res){
    try{
        const {title, content} = req.body;
        await Note.findByIdAndUpdate(req.params.id,
            {title,content},
            {
                new: true,
            }
        );

        if (!updatedNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function deleteNote(req, res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message: "note not found"});
        res.status(200).json({message:"Note deleted successfully"});
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message:"server error"});
    }
};