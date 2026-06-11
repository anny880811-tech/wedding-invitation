const RSVP = () => {
  return (<>
    <div className="RSVP-custom">
      <div className="section-title">GUSET RECISTARTION</div>
      <h3 className="section-header">賓客登記</h3>
      <div className="section-heading__divider"></div>
      <div className="form-container">
        <p>為了讓我們更好的安排一切，</p>
        <p>請協助填寫以下資料。</p>
        <div className="form-custom">
          <div className="form-group">
            <label htmlFor="statistics">1. 參加人數</label>
            <select name="" id="statistics"></select>
          </div>
          <div className="form-group">
            <div>2. 抵達峇里島的時間＆航班資訊</div>
            <div className="flight-group">
              <div>
                <label htmlFor="arrivalDate">抵達日期</label>
                <input type="date" id="arrivalDate" />
              </div>
              <div>
                <label htmlFor="arrivalTime">抵達時間</label>
                <input type="time" id="arrivalTime" />
              </div>
            </div>
            <div className="flight-group">
              <div>
                <label htmlFor="">航空資訊</label>
                <input type="text" placeholder="請輸入航空公司" />
              </div>
              <div>
                <label htmlFor="">航空編號</label>
                <input type="text" placeholder="請輸入航空編號" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div>3. 離開峇里島的時間＆航班資訊</div>
            <div className="flight-group">
              <div>
                <label htmlFor="departureDate">離開日期</label>
                <input type="date" id="departureDate" />
              </div>
              <div>
                <label htmlFor="departureTime">離開時間</label>
                <input type="time" id="departureTime" />
              </div>
            </div>
            <div className="flight-group">
              <div>
                <label htmlFor="">航空資訊</label>
                <input type="text" placeholder="請輸入航空公司" />
              </div>
              <div>
                <label htmlFor="">航空編號</label>
                <input type="text" placeholder="請輸入航空編號" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div>4. 是否對任何食物過敏？</div>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" className="checkbox" id="noAllergies" />
                <label htmlFor="noAllergies">無</label>
              </div>
              <div>
                <input type="checkbox" className="checkbox" id="allergies" />
                <label htmlFor="allergies">有 (請說明)</label>
              </div>
            </div>
            <textarea name="" id="" placeholder="例如：花生、海鮮、素食、宗教飲食等"></textarea>
          </div>
          <div className="form-group">
            <div>5. 是否有其他特殊需求？</div>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" className="checkbox" id="noNeed" />
                <label htmlFor="noNeed">無</label>
              </div>
              <div>
                <input type="checkbox" className="checkbox" id="need" />
                <label htmlFor="need">有 (請說明)</label>
              </div>
            </div>
            <textarea name="" id="" placeholder="例如：兒童座椅、輪椅協助等"></textarea>
          </div>
          <div className="form-group">
            <div>6. 是否需要我們協助規畫婚禮以外的峇里島行程？</div>
            <div className="checkbox-group">
              <div>
                <input type="checkbox" className="checkbox" id="noJourney" />
                <label htmlFor="noJourney">不需要</label>
              </div>
              <div>
                <input type="checkbox" className="checkbox" id="journey" />
                <label htmlFor="journey">需要</label>
              </div>
            </div>
            <input type="time" id="journeyTime" />
          </div>
          <div className="form-group">
            <label htmlFor="statistics">7. 給我們的祝福</label>
            <textarea name="" id="" placeholder="寫下您想對我們說的話..."></textarea>
          </div>
          <button type="submit" className="form-btn">送出回覆</button>
        </div>
      </div>
    </div>
  </>)
}

export default RSVP