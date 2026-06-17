const LeaveMessage = () => {
  return (<>
    <div className="leaveMessage-custom">
      <div className="section-title">Wedding Wish</div>
      <h3 className="section-header">給我們的祝福</h3>
      <div className="section-heading__divider"></div>
      <div className="wish-container">
        <div>
          <h5>100則</h5>
        </div>
        <div className="input-group">
          <input type="text" name="" id="" className="name" placeholder="名字 Name" />
          <input type="text" name="" id="" className="wishes" placeholder="給我們的祝福 Wishes" />
        </div>

        <button type="submit">送出</button>
      </div>
    </div>
  </>)
}

export default LeaveMessage