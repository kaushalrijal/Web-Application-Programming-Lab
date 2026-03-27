import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return <h2>Welcome to the Home page</h2>
}

function About() {
  return <h2>This is the About page</h2>
}

function Contact() {
  return <h2>This is the Contact page</h2>
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>React Router Example</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
