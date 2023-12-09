/* eslint-disable react/prop-types */
import Stack from "react-bootstrap/Stack";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteCard from "./NoteCard";
import { sortNotes } from "../utils/sortNotes";

function Sidebar({
  notes,
  addNote,
  deleteNote,
  currentNoteId,
  setCurrentNoteId,
}) {
  return (
    <div className="sidebar border-end">
      <Stack direction="horizontal" className="p-3 border-bottom">
        <h1>Notes</h1>
        <FontAwesomeIcon
          className="ms-auto icon-btn add-btn"
          icon={faFileCirclePlus}
          onClick={addNote}
        />
      </Stack>
      <Stack>
        {sortNotes(notes).map((note) => {
          return (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              updatedAt={note.updatedAt}
              deleteNote={deleteNote}
              currentNoteId={currentNoteId}
              setCurrentNoteId={setCurrentNoteId}
            />
          );
        })}
      </Stack>
    </div>
  );
}

export default Sidebar;
