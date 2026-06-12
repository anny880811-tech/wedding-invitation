const Cover = ({ onOpen }) => {
  return (<>
    <div className="invitation-container">
      <div className="cover-section">
        <h5>THE WEDDING OF</h5>
        <h1 className="title">Beni ＆ Yiting</h1>
        <p>2027.01.23</p>
        <button type="button" className="cover-btn" onClick={onOpen}>Open Invitation</button>
      </div>
    </div>
  </>)
}

export default Cover
