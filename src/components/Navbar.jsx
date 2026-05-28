function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className='navbar'>
      <h1>🧠 Smart Notes Pro</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀ Light' : '🌙 Dark'}
      </button>
    </nav>
  )
}

export default Navbar