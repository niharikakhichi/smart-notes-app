import { useState, useEffect } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addOrUpdateNote = () => {
    if (!note.trim()) return;

    if (editId) {
      setNotes(
        notes.map((n) =>
          n.id === editId ? { ...n, text: note } : n
        )
      );
      setEditId(null);
    } else {
      setNotes([{ id: Date.now(), text: note }, ...notes]);
    }

    setNote("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  const editNote = (n) => {
    setNote(n.text);
    setEditId(n.id);
  };

  const filteredNotes = notes.filter((n) =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🧠 Smart Notes Pro</h1>

      {/* SEARCH */}
      <input
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* INPUT */}
      <div style={styles.inputBox}>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note..."
          style={styles.textarea}
        />

        <button onClick={addOrUpdateNote} style={styles.button}>
          {editId ? "Update Note" : "Add Note"}
        </button>
      </div>

      {/* NOTES */}
      <div style={styles.grid}>
        {filteredNotes.map((n) => (
          <div key={n.id} style={styles.card}>
            <p>{n.text}</p>

            <div style={styles.actions}>
              <button onClick={() => editNote(n)} style={styles.edit}>
                Edit
              </button>
              <button
                onClick={() => deleteNote(n.id)}
                style={styles.delete}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    padding: "30px",
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
  },
  search: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto 20px",
    display: "block",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
  },
  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    height: "100px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
    marginTop: "30px",
  },
  card: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "12px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  edit: {
    background: "orange",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  delete: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;