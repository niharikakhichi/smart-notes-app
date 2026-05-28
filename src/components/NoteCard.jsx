function NoteCard({ note, deleteNote }) {
  return (
    <div className='note-card'>

      <h3>{note.title}</h3>

      <p>{note.text}</p>

      <div className='card-footer'>
        <small>{note.createdAt}</small>

        <button onClick={() => deleteNote(note.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard