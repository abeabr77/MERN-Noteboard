import {Link} from "react-router";

const NoteCard = ({note}) => {
    return <Link to ={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]">NoteCard</Link>;
    <div className=""></div>
};

export default NoteCard;