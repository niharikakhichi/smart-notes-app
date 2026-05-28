function NoteCard({ note, deleteNote }) {
  return (
    <div className='note-card'>
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