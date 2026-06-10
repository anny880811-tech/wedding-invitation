import { useState } from "react";
import Cover from "./sections/Cover";
import Hero from "./sections/Hero";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={`main-layout ${isOpen ? 'is-open' : ''}`}>
        <Cover onOpen={() => { setIsOpen(true) }} />
        <Hero />
      </div>
    </>
  )
}

export default App
