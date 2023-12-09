import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteID, setCurrentNoteID] = useState(notes[0]?.id || "");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNotes = {
      id: nanoid(),
      title: "Untitled",
      contents: "",
      updatedAt: Date.now(),
    };

    setNotes((prev) => [...prev, newNotes]);
    setCurrentNoteID(newNotes.id);
  };

  const updateNote = (updatedNotes) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNotes.id ? updatedNotes : note))
    );
  };

  const getCurrentNote = () => {
    return notes.find((note) => note.id === currentNoteID) || notes[0];
  };

  const deleteNote = (noteToBeDeletedID) => {
    setNotes((prev) => prev.filter((note) => note.id !== noteToBeDeletedID));
    if (noteToBeDeletedID === currentNoteID && notes.length > 0) {
      setCurrentNoteID(notes[0].id);
    }
  };
  return (
    <>
      <Sidebar
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        currentNoteId={currentNoteID}
        setCurrentNoteId={setCurrentNoteID}
      />
      <Note updateNote={updateNote} currentNote={getCurrentNote()} />
    </>
  );
}

export default App;
