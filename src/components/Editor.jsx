/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";

function Editor({ updateNote, currentNote }) {
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    updateNote({ ...currentNote, updatedAt: Date.now(), [name]: value });
  };
  return currentNote ? (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title..."
          className="mb-2"
          value={currentNote.title}
          onChange={handleFormChange}
        />
        <Form.Control
          type="text"
          name="contents"
          placeholder="Contents..."
          as="textarea"
          className="h-100 my-2"
          value={currentNote.contents}
          onChange={handleFormChange}
          rows={25}
        />
      </Form.Group>
    </Form>
  ) : (
    <h2>No added notes yet...</h2>
  );
}

export default Editor;
