import { useState } from 'react'

function NoteForm({ addNote }) {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if (!text.trim()) return

    addNote(text)
    setText('')
  }

  return (
    <div className='note-form'>
      <textarea
        placeholder='Write your thoughts here...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className='form-footer'>
        <span>{text.length} characters</span>

        <button onClick={handleSubmit}>
          Add Note
        </button>
      </div>
    </div>
  )
}

export default NoteForm