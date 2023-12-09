/* eslint-disable react/prop-types */
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Editor from "./Editor";
import Preview from "./Preview";

function Note({ currentNote, updateNote }) {
  return (
    <div className="content p-3 px-5">
      {currentNote ? (
        <Tabs defaultActiveKey="preview" className="mb-3">
          <Tab eventKey="edit" title="Edit">
            <Editor currentNote={currentNote} updateNote={updateNote} />
          </Tab>{" "}
          <Tab eventKey="preview" title="Preview">
            <Preview currentNote={currentNote} />
          </Tab>
        </Tabs>
      ) : (
        <p className="fw-semibold fs-4">No added notes</p>
      )}
    </div>
  );
}

export default Note;
