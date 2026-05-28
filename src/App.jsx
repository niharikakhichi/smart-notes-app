import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import NoteForm from './components/NoteForm'
import SearchBar from './components/SearchBar'
import NoteCard from './components/NoteCard'
import './styles/app.css'

function App() {
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('smart-notes'))

    if (saved) {
      setNotes(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('smart-notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      createdAt: new Date().toLocaleString(),
    }

    setNotes([newNote, ...notes])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className='container'>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <NoteForm addNote={addNote} />

        <div className='notes-grid'>
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              deleteNote={deleteNote}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App