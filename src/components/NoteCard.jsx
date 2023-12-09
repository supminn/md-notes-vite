/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Fade } from "react-bootstrap";
import { formatDate } from "../utils/formatDate";
import { formatTitle } from "../utils/formatTitle";

function NoteCard({
  deleteNote,
  id,
  currentNoteId,
  setCurrentNoteId,
  title,
  updatedAt,
}) {
  function handleNoteDelete(event) {
    event.stopPropagation();
    deleteNote(id);
  }

  return (
    <Fade appear in>
      <div
        className={`border-bottom py-2 p-3 ${
          id === currentNoteId ? "selected" : "note-card"
        }`}
        onClick={() => setCurrentNoteId(id)}
      >
        <h3 className="fw-semibold fs-5">{formatTitle(title)}</h3>
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 fs-6 fst-italic">{formatDate(updatedAt)}</p>
          <FontAwesomeIcon
            className="icon-btn delete-btn"
            icon={faTrashCan}
            onClick={handleNoteDelete}
          />
        </div>
      </div>
    </Fade>
  );
}

export default NoteCard;
