const Cover = ({ onOpen, onImgLoaded }) => {
  return (<>
    <div className="invitation-container">
      <img
        className="cover-bg"
        src="/src/assets/TRE_2314.webp"
        alt=""
        onLoad={onImgLoaded}
      />
      <div className="cover-text">
        <h5 className="cover-subtitle">THE WEDDING OF</h5>
        <h1 className="title">韋昊良 ＆ 呂易庭</h1>
        <p>2027.01.23</p>
      </div>
      <div className="cover-btn-wrapper">
        <h2>親愛的家人們</h2>
        <h4>誠摯邀請您一同參與我們的婚禮</h4>
        <button type="button" className="cover-btn" onClick={onOpen}>Open Invitation</button>
      </div>
    </div>
  </>)
}

export default Cover
