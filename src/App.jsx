import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NoteForm from './components/NoteForm'
import SearchBar from './components/SearchBar'
import NoteCard from './components/NoteCard'
import './styles/app.css'

function App() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const title = text
      .split(' ')
      .slice(0, 3)
      .join(' ')
      .toUpperCase()

    const newNote = {
      id: Date.now(),
      title,
      text,
      createdAt: new Date().toLocaleString(),
    }

    setNotes([newNote, ...notes])
  }

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id)
    setNotes(filteredNotes)
  }

  const editNote = (id) => {
    const updatedText = prompt('Edit your note:')

    if (!updatedText) return

    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: updatedText
            .split(' ')
            .slice(0, 3)
            .join(' ')
            .toUpperCase(),
          text: updatedText,
        }
      }

      return note
    })

    setNotes(updatedNotes)
  }

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className='container'>
        <SearchBar search={search} setSearch={setSearch} />

        <NoteForm addNote={addNote} />

        <div className='notes-grid'>
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App