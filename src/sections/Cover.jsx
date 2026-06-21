import { useState } from "react"
import coverbg from '../assets/TRE_2314.webp'

const Cover = ({ onOpen, onImgLoaded, onPlay }) => {
  const [isLeaving, setIsLeaving] = useState(false)
  const [bgLoaded, setBgLoaded] = useState(false)
  const handleOpen = () => {
    onPlay()
    setIsLeaving(true)
    setTimeout(() => {
      onOpen()
    }, 1200) // 配合動畫時間
  }
  const handleLoad = () => {
    setBgLoaded(true)
    onImgLoaded()
  }
  return (<>
    <div className={`invitation-container${isLeaving ? ' slide-up' : ''}`}>
      <img className="cover-bg" src={coverbg} alt="" onLoad={handleLoad} onError={onImgLoaded} />
      {bgLoaded && (<>
        {/* 桌機版 */}
        <div className="cover-text--desktop">
          <div className="cover-text__names">
            <h5>THE WEDDING OF</h5>
            <h1 className="title">韋昊良 ＆ 呂易庭</h1>
            <h1 className="title">Beni & Yiting</h1>
            <p>2027.01.24</p>
          </div>
          <div className="cover-btn-desktop">
            <button type="button" className="cover-btn" onClick={handleOpen}>
              Open Invitation
            </button>
          </div>
        </div>

        {/* 手機版 */}
        <div className="cover-text">

          <h5>THE WEDDING OF</h5>
          <h1 className="title">韋昊良 ＆ 呂易庭</h1>
          <h1 className="title">Beni & Yiting</h1>
          <p>2027.01.24</p>
        </div>
        <div className="cover-btn-wrapper">
          <h2>親愛的家人們</h2>
          <h4>誠摯邀請您一同參與我們的婚禮</h4>
          <button type="button" className="cover-btn" onClick={handleOpen}>Open Invitation</button>
        </div>
      </>)}
    </div>
  </>)
}

export default Cover
