import { TextAlignCenter } from "lucide-react";
import { useState } from "react"
import DatePicker from "react-datepicker"
import Select from "react-select"

const RSVP = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [arrivalTime, setArrivalTime] = useState(null);
  const [guestCount, setGuestCount] = useState(null);
  const options = Array.from({ length: 11 }, (_, i) => ({
    value: i,
    label: `${i} 人`,
  }));
  const selectStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "8px",
      borderColor: state.isFocused ? "rgba(128, 0, 32, 0.3)" : "rgba(128, 0, 32, 0)",
      minHeight: "32px",
      height: "32px",
      backgroundColor: "#F8F4ED",
      boxShadow: "none",
      "&:hover": {
        borderColor: "rgba(128, 0, 32, 0.5)",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#fdf6f0",
      borderRadius: "8px",
      overflow: "hidden",
      marginTop: "4px",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#800020"
        : state.isFocused
          ? "rgba(128, 0, 32, 0.1)"
          : "transparent",
      color: state.isSelected ? "#fff" : "#333",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#333",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#999",
      fontSize: "14px",  // 縮小字級
      margin: 0,
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: "32px",
    }),
    valueContainer: (base) => ({
      ...base,
      height: "32px",
      padding: "0 8px",
      display: "flex",
      alignItems: "center",
    }),
  };
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
            <Select
              inputId="statistics"
              options={options}
              value={guestCount}
              onChange={(selected) => setGuestCount(selected)}
              placeholder="請選擇人數"
              styles={selectStyles}
            />
          </div>
          <div className="form-group">
            <div>2. 抵達峇里島的時間＆航班資訊</div>
            <div className="flight-group">
              <div className="form-field">
                <label htmlFor="arrivalDate">抵達日期</label>
                <DatePicker id="arrivalDate" placeholderText=" 月 / 日 / 年" popperPlacement="bottom-start" selected={selectedDate} onChange={(date) => { setSelectedDate(date) }} />
              </div>
              <div className="form-field">
                <label htmlFor="arrivalTime">抵達時間</label>
                <DatePicker
                  id="arrivalTime"
                  placeholderText="--：-- --"
                  selected={arrivalTime}
                  onChange={(time) => setArrivalTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="時間"
                  dateFormat="hh:mm aa"
                />

              </div>
            </div>
            <div className="flight-group">
              <div className="form-field">
                <label htmlFor="">航空資訊</label>
                <input type="text" placeholder="請輸入航空公司" />
              </div>
              <div className="form-field">
                <label htmlFor="">航空編號</label>
                <input type="text" placeholder="請輸入航空編號" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div>3. 離開峇里島的時間＆航班資訊</div>
            <div className="flight-group">
              <div className="form-field">
                <label htmlFor="departureDate">離開日期</label>
                <DatePicker id="departureDate" placeholderText=" 月 / 日 / 年" popperPlacement="bottom-start" selected={selectedDate} onChange={(date) => { setSelectedDate(date) }} />
              </div>
              <div className="form-field">
                <label htmlFor="departureTime">離開時間</label>
                <DatePicker
                  id="departureTime"
                  placeholderText=" --：-- --"
                  selected={arrivalTime}
                  onChange={(time) => setArrivalTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="時間"
                  dateFormat="hh:mm aa"
                />
              </div>
            </div>
            <div className="flight-group">
              <div className="form-field">
                <label htmlFor="">航空資訊</label>
                <input type="text" placeholder="請輸入航空公司" />
              </div>
              <div className="form-field">
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