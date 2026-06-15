import TRE_2294 from '../assets/TRE_2294.webp'
import TRE_2353 from '../assets/TRE_2353.webp'
import TRE_2347 from '../assets/TRE_2347.webp'
import TRE_2335 from '../assets/TRE_2335.webp'
import TRE_2444 from '../assets/TRE_2444.webp'
import TRE_2521 from '../assets/TRE_2521.webp'
const Gallery = () => {
  return (<>
    <div className="gallery-custom">
      <div className="section-title">MOMENTS OF US</div>
      <h3 className="section-header">屬於我們的片刻</h3>
      <div className="section-heading__divider"></div>
      <div className="photo-group">
        <div className="photo-mixed-group">
          <div className="photo-portrait-container">
            <img src={TRE_2294} className="photo-s" alt="婚紗照" loading="lazy" />
          </div>
          <div className="photo-landscape-container">
            <img src={TRE_2353} className="photo-s" alt="婚紗照" loading="lazy" />
          </div>
        </div>
        <div className="photo-mixed-group">
          <div className="photo-landscape-container">
            <img src={TRE_2347} className="photo-s" alt="婚紗照" loading="lazy" />
          </div>
          <div className="photo-portrait-container">
            <img src={TRE_2335 } className="photo-s" alt="婚紗照" loading="lazy" />
          </div>
        </div>
        <div className="photo-mixed-group">
          <div className="photo-portrait-container">
            <img src={TRE_2521} className="photo-s" alt="婚紗照" loading="lazy" />
          </div>
          <div className="photo-landscape-container">
            <img src={TRE_2444} className="photo-s" alt="婚紗照" loading="lazy" />
          </div>
        </div>
        {/* <div className="photo-l-container">
          <img src={TRE_2444} className="photo-l" alt="婚紗照" />
        </div> */}
      </div>
    </div>
  </>)
}

export default Gallery