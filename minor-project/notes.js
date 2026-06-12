import React,{useState} from "react";

function Notes() {
  const [note,setNote] = useState("");
  const [notes,setNotes] = useState([]);

  const addNote = () => {
    if(note.trim()){
      setNotes([...notes,note]);
      setNote("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_,i)=>i!==index));
  };

  return (
    <div>
      <h2>Notes App</h2>

      <textarea
        value={note}
        onChange={(e)=>setNote(e.target.value)}
        placeholder="Write your note..."
      />

      <button onClick={addNote}>Save Note</button>

      {notes.map((n,index)=>(
        <div key={index}>
          <p>{n}</p>
          <button onClick={()=>deleteNote(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Notes;