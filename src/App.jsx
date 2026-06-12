import { useState } from "react";
import Cover from "./sections/Cover";
import Hero from "./sections/Hero";
import WeddingInfo from "./sections/WeddingInfo";
import Gallery from "./sections/Gallery";
import WeddingHospitality from "./sections/WeddingHospitality";
import RSVP from "./sections/RSVP";
import TravelGuide from "./sections/TravelGuide";
import DressGuide from "./sections/DressGuide";
import Footer from "./sections/Footer";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={`main-layout ${isOpen ? 'is-open' : ''}`}>
        <Cover onOpen={() => { setIsOpen(true) }} />
        <div className="content-section">
          <Hero />
          <WeddingInfo />
          <Gallery />
          <WeddingHospitality />
          <RSVP />
          <TravelGuide />
          <DressGuide />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
