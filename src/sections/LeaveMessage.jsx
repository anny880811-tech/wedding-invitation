const LeaveMessage = () => {
  return (<>
    <div className="leaveMessage-custom">
      <div className="section-title">Wedding Wish</div>
      <h3 className="section-header">給我們的祝福</h3>
      <div className="section-heading__divider"></div>
      <div className="wish-container">
        <div>
          <h5>100則留言</h5>
        </div>
        <div className="input-group">
          <input type="text" name="" id="" className="name" placeholder="名字 Name" />
          <textarea type="text" name="" id="" className="wishes" placeholder="給我們的祝福 Wishes" />
        </div>
        <button type="submit" className="wish-btn">送出 Send</button>
        {/* <div>
          <div className="message-line"></div>
          <div className="message-board">
            <p className="title">安安</p>
            <p>恭喜恭喜~~，新婚愉快</p>
          </div>
        </div> */}
      </div>
       <div>
          <div className="message-board">
            <p className="title">安安</p>
            <p>恭喜恭喜~~，新婚愉快</p>
            <div className="message-line"></div>
          </div>
        </div>
    </div>
  </>)
}

export default LeaveMessage