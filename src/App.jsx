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
import LeaveMessage from "./sections/LeaveMessage";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  return (
    <>
      {!imgLoaded && (
        <div className="cover-loading">
          <p>載入中...</p>
        </div>
      )}
      <div className={`main-layout ${isOpen ? 'is-open' : ''}`}>
        <Cover
          onOpen={() => { setIsOpen(true) }}
          onImgLoaded={() => setImgLoaded(true)}
        />
        <div className="content-section">
          <Hero />
            <WeddingInfo />
            <WeddingHospitality />
          <Gallery />
          <RSVP />
          <TravelGuide />
          <DressGuide />
          <LeaveMessage />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
