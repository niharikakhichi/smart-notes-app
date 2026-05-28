function NoteCard({ note, deleteNote, editNote }) {
  return (
    <div className='note-card'>
      <h3>{note.title}</h3>

      <p>{note.text}</p>

      <div className='card-footer'>
        <small>{note.createdAt}</small>

        <div className='buttons'>
          <button onClick={() => editNote(note.id)}>
            ✏ Edit
          </button>

          <button onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard