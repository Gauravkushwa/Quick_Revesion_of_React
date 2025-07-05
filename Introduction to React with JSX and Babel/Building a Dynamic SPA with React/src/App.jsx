import { useState } from 'react'
import './App.css'
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState("home");
  let content;
  if(page === "home") content = <Home />
  else if(page === "about") content = <About />
  else if(page === "contact") content = <Contact />

  return (
    <>
    <Navbar  setPage = {setPage} />
      <div>
        {content}
      </div>
    </>
  )
}

export default App
