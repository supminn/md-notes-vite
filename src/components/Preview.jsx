/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown";

function Preview({currentNote}) {
  return (
    <>
        <h2 className="fw-bold">{currentNote.title}</h2>
        <ReactMarkdown>{currentNote.content}</ReactMarkdown>
    </>
  )
}

export default Preview