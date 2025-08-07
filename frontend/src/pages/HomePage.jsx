import Navbar from "../components/Navbar";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast"

const HomePage = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const res = await axios.get("http://localhost:5001/api/notes");
          console.log(res.data);
          setNotes(res.data);
        } catch (error) {
          console.log("Error fetching notes");
          console.log(error);
          toast.error("Failed to load notes");
        } finally {
        setloading(false);
      }
    }
      fetchNotes();
  }, []); 
  

  return (
    <div>
      <Navbar />

      <div className ="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map(note => (
              <NoteCard key={note.id} note={note} /> 
            ))}

          </div>
        )}
      </div>
    </div>
  )
};

export default HomePage;