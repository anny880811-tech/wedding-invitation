import { useForm, Controller } from "react-hook-form"
import { format } from "date-fns"
import DatePicker from "react-datepicker"
import Select from "react-select"
import axios from "axios"


const RSVP = () => {
  const sheetdbUrl = `https://sheetdb.io/api/v1/9tmu6xegt8tur`
  const options = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} 人`,
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
  const formatDate = (date) => date ? format(date, "MM/dd/yyyy") : ""
  const formatTime = (date) => date ? format(date, "hh:mm a") : ""
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    shouldUnregister: true,
    defaultValues: {
      joinStatus: "",
      statistics: null,
      email: null,
      arrivalDate: null,
      arrivalTime: null,
      departureDate: null,
      departureTime: null,
      travelPlanDate: null,
      allergyStatus: "",
      needStatus: "",
    }
  })
  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      arrivalDate: formatDate(data.arrivalDate),
      arrivalTime: formatTime(data.arrivalTime),
      departureDate: formatDate(data.departureDate),
      departureTime: formatTime(data.departureTime),
    }
    console.log(formattedData)
    try {
      console.log(JSON.stringify({ data: [formattedData] }, null, 2))
      const res = await axios.post(sheetdbUrl, { data: [formattedData] })
      console.log('成功', res.data);

    } catch (error) {
      console.error("送出錯誤:", error.response?.data || error.message)
    }
  }
  const allergyStatus = watch('allergyStatus')
  const needStatus = watch('needStatus')
  const joinStatus = watch('joinStatus')
  return (<>
    <div className="RSVP-custom">
      <div className="section-title">GUEST REGISTRATION</div>
      <h3 className="section-header">賓客登記</h3>
      <div className="section-heading__divider"></div>
      <div className="form-container">
        <div className="remind">
          <p>為了讓我們更好的安排一切</p>
          <p>請協助填寫以下資料</p>
          <p className="warn-text">於8/31前填寫完成</p>
          <p className="en">To help us make the necessary arrangements, <br />
            please complete the information below.</p>
          <p className="en warn-text">Kindly submit your response
            by August 31.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-custom">
            <div className="form-group">
              <div>請問是否參加我們的婚禮？</div>
              <div className="en">Will you be attending our wedding?</div>
              <div className="checkbox-group">
                <div>
                  <input type="radio" className="checkbox" id="join" value="yes" {...register('joinStatus', {
                    required: '請選擇是否參加婚禮',
                  })} />
                  <label htmlFor="join">我會參加<span className="en" style={{ display: 'block' }}>I will attend</span></label>
                </div>
                <div>
                  <input type="radio" className="checkbox" id="noJoin" value='no' {...register('joinStatus')} />
                  <label htmlFor="noJoin">無法參加 <span className="en" style={{ display: 'block' }}>I am unable to attend</span></label>
                </div>
              </div>
              <span>{errors.joinStatus ? errors.joinStatus.message : ''}</span>
            </div>
            {joinStatus === 'yes' && (<>
              <div className="form-group">
                <label htmlFor="statistics">1. 參加人數<br /> Guest Count</label>
                <Controller
                  control={control}
                  name="statistics"
                  rules={{ required: "請選擇參加人數" }}
                  render={({ field }) => (
                    <Select
                      inputId="statistics"
                      options={options}
                      onChange={(selected) => field.onChange(selected?.value)}
                      value={options.find(opt => opt.value === field.value) || null}
                      placeholder="請選擇人數"
                      styles={selectStyles}
                    />
                  )}
                />
                {errors.statistics && (
                  <span>{errors.statistics.message}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">2. Email <br /> (詳細活動於婚禮前1個月email通知) <br className="en" />Detailed event information will be sent via email one month before the wedding.</label>
                <input type="text" id="email" placeholder="請填寫您的Email" {...register('email', {
                  required: '請填寫您的Email'
                })} />
                <span>{errors.email ? errors.email.message : ''}</span>
              </div>
              <div className="form-group">
                <div>3. 抵達峇里島的時間＆航班資訊 <br />Arrival Information</div>
                <div className="flight-group">
                  <div className="form-field">
                    <label htmlFor="arrivalDate">抵達日期 <br />Arrival Date</label>
                    <Controller
                      control={control}
                      name="arrivalDate"
                      rules={{ required: "請選擇抵達日期" }}
                      render={({ field }) => (
                        <DatePicker
                          id="arrivalDate"
                          placeholderText=" 月 / 日 / 年"
                          selected={field.value}
                          popperPlacement="bottom-start"
                          onChange={(date) => { field.onChange(date) }} />
                      )}
                    />
                    {errors.arrivalDate && (
                      <span>{errors.arrivalDate.message}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="arrivalTime">抵達時間 <br />Arrival Time</label>
                    <Controller
                      control={control}
                      name="arrivalTime"
                      rules={{ required: "請選擇抵達時間" }}
                      render={({ field }) => (<DatePicker
                        id="arrivalTime"
                        placeholderText="--：-- --"
                        selected={field.value}
                        onChange={(time) => field.onChange(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="時間"
                        dateFormat="hh:mm aa"
                      />)}
                    /> {errors.arrivalTime && (
                      <span>{errors.arrivalTime.message}</span>
                    )}
                  </div>
                </div>
                <div className="flight-group">
                  <div className="form-field">
                    <label htmlFor="arrivalAirlines">航空資訊 <br />Airline</label>
                    <input type="text" id="arrivalAirlines" placeholder="請輸入航空公司" {...register('arrivalAirlines', {
                      required: '請填寫航空資訊'
                    })} />
                    <span>{errors.arrivalAirlines ? errors.arrivalAirlines.message : ''}</span>
                  </div>
                  <div className="form-field">
                    <label htmlFor="arrivalFlightNumber">航空編號 <br /> Flight Number</label>
                    <input type="text" id="arrivalFlightNumber" placeholder="請輸入航空編號" {...register('arrivalFlightNumber', {
                      required: '請填寫航空編號',
                    })} />
                    <span>{errors.arrivalFlightNumber ? errors.arrivalFlightNumber.message : ''}</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div>4. 離開峇里島的時間＆航班資訊<br />Departure Information</div>
                <div className="flight-group">
                  <div className="form-field">
                    <label htmlFor="departureDate">離開日期<br />Departure Date</label>
                    <Controller
                      control={control}
                      name="departureDate"
                      rules={{ required: "請選擇離開日期" }}
                      render={({ field }) => (
                        <DatePicker
                          id="departureDate"
                          placeholderText=" 月 / 日 / 年"
                          selected={field.value}
                          popperPlacement="bottom-start"
                          onChange={(date) => { field.onChange(date) }} />
                      )}
                    />
                    {errors.departureDate && (
                      <span>{errors.departureDate.message}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="departureTime">離開時間<br />Departure Time</label>
                    <Controller
                      control={control}
                      name="departureTime"
                      rules={{ required: "請選擇離開時間" }}
                      render={({ field }) => (
                        <DatePicker
                          id="departureTime"
                          placeholderText=" --：-- --"
                          selected={field.value}
                          onChange={(time) => field.onChange(time)}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="時間"
                          dateFormat="hh:mm aa"
                        />
                      )} />
                    {errors.departureTime && (
                      <span>{errors.departureTime.message}</span>
                    )}
                  </div>
                </div>
                <div className="flight-group">
                  <div className="form-field">
                    <label htmlFor="departureAirline">航空資訊<br />Airline</label>
                    <input type="text" id="departureAirline" placeholder="請輸入航空公司" {...register('departureAirline', {
                      required: '請填寫航空資訊',
                    })} />
                    <span>{errors.departureAirline ? errors.departureAirline.message : ''}</span>
                  </div>
                  <div className="form-field">
                    <label htmlFor="departureFlightNumber">航空編號<br />Flight Number</label>
                    <input type="text" id="departureFlightNumber" placeholder="請輸入航空編號" {...register('departureFlightNumber', {
                      required: '請填寫航空編號',
                    })} />
                    <span>{errors.departureFlightNumber ? errors.departureFlightNumber.message : ''}</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div>5. 是否對任何食物過敏？<br />Do you have any food allergies or dietary restrictions?</div>
                <div className="checkbox-group">
                  <div>
                    <input type="radio" className="checkbox" id="noAllergies" value="none" {...register('allergyStatus', { required: '請選擇是否有食物過敏', })} />
                    <label htmlFor="noAllergies">無 No</label>
                  </div>
                  <div>
                    <input type="radio" className="checkbox" id="allergies" value='yes' {...register('allergyStatus')} />
                    <label htmlFor="allergies">有 (請說明)<span className="en" style={{ display: 'block' }}>Yes (please specify)</span></label>

                  </div>
                </div>
                <span>{errors.allergyStatus ? errors.allergyStatus.message : ''}</span>
                {allergyStatus === 'yes' && (<textarea placeholder="例如：花生、海鮮、素食、宗教飲食等" {...register('allergyContent', { required: '請填寫您的飲食需求', })}></textarea>)}
                <span>{errors.allergyContent ? errors.allergyContent.message : ''}</span>
              </div>
              <div className="form-group">
                <div>6. 是否有其他特殊需求？<br />Do you have any special requests or requirements?</div>
                <div className="checkbox-group">
                  <div>
                    <input type="radio" className="checkbox" id="noNeed" value='none' {...register('needStatus', { required: '請選擇是否有特殊需求', })} />
                    <label htmlFor="noNeed">無 No</label>
                  </div>
                  <div>
                    <input type="radio" className="checkbox" id="need" value='yes' {...register('needStatus')} />
                    <label htmlFor="need">有 (請說明)<span className="en" style={{ display: 'block' }}>Yes (please specify)</span></label>
                  </div>
                </div>
                <span>{errors.needStatus ? errors.needStatus.message : ''}</span>
                {needStatus === 'yes' && (<textarea placeholder="例如：兒童座椅、輪椅協助等" {...register('needContent', { required: '請填寫您的需求', })}></textarea>)}
                <span>{errors.needContent ? errors.needContent.message : ''}</span>
              </div>
              {/* <div className="form-group">
                <div>7. 是否需要我們協助規畫婚禮以外的峇里島行程？</div>
                <div className="checkbox-group">
                  <div>
                    <input type="radio" className="checkbox" id="noJourney" value='none' {...register('regularTravelStatus', { required: '請選擇是否需要協助', })} />
                    <label htmlFor="noJourney">不需要</label>
                  </div>
                  <div>
                    <input type="radio" className="checkbox" id="journey" value='yes'{...register('regularTravelStatus')} />
                    <label htmlFor="journey">需要(請附上日期)</label>
                  </div>
                </div>
                <span>{errors.regularTravelStatus ? errors.regularTravelStatus.message : ''}</span>
                {regularTravelStatus === 'yes' && (<textarea placeholder="請附上日期及需要的協助" {...register('regularTravelContent', { required: '請填寫日期及需要的協助', })}></textarea>)}
                <span>{errors.regularTravelContent ? errors.regularTravelContent.message : ''}</span>
              </div> */}
              <div className="form-group">
                <div>7. 1/24在婚禮開始之前，我們誠摯邀請您依照自己的步調，感受貝都古高地的自然之美(請擇一)
                </div>
                <div className="en">On January 24, prior to the wedding ceremony, we warmly invite you to explore the natural beauty of the Bedugul highlands at your own pace. Please choose one of the following options:</div>
                <div className="checkbox-group">
                  <div>
                    <input type="radio" className="checkbox" id="aJourney" value="A" {...register('journeyStatus')} />
                    <label htmlFor="aJourney" className="a">A 行程<span className="en" style={{ display: 'block' }}>A. Resort Day</span></label>
                  </div>
                  <div>
                    <input type="radio" className="checkbox" id="bJourney" value='B' {...register('journeyStatus')} />
                    <label htmlFor="bJourney" className="b">B 行程<span className="en" style={{ display: 'block' }}>B. Exploration Day</span></label>
                  </div>
                </div>
                <div className="tour-custom">
                  <div className="content">無論您選擇在度假村放鬆休憩，或是探索周邊風景，我們都希望您能盡情享受留下美好的回憶</div>
                  <div className="en content">Whether you choose to unwind at the resort or explore the surrounding area, we hope you enjoy a memorable and wonderful experience.</div>

                  <div className="tour a">
                    A 行程 <br />
                    <span className="en" style={{ display: 'block', color: 'white' }}>A. Resort Day</span>
                    在度假村享受愜意時光，體驗度假村提供的設施、活動與餐飲服務。<br />
                    <span className="en" style={{ display: 'block', color: 'white' }}>Enjoy a relaxing day at the resort, and make the most of its facilities, activities, and dining services.</span>

                    <a href='https://www.hommhotels.com/hotels/homm-saranam-baturiti#offers-linked' target="_blank" rel="noreferrer" className="tour-link">
                      更多資訊 Learn More <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                  <div className="tour b">
                    B 行程
                    <span className="en" style={{ display: 'block', color: 'white' }}>B. Exploration Day</span>
                    造訪貝都古周邊最具代表性的景點與在地體驗
                    <span className="en" style={{ display: 'block', color: 'white' }}>Explore some of Bedugul’s most iconic attractions and local experiences.</span>
                    <ul>
                      <li>草莓農園(Strawberry Farms)</li>
                      <li>烏倫達努布拉坦寺(Ulun Danu Beratan Temple)與布拉坦湖(Bratan lake)</li>
                      <li>峇里植物園(Bali Botanical Garden)</li>
                      <li>峇里農場莊園(Bali Farm House)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>)}
            <button type="submit" className="form-btn" disabled={isSubmitting}>{isSubmitting ? '表單送出中... Submitting...' : '送出回覆 Submit Response'}</button>
          </div>
        </form>
      </div>
    </div>
  </>)
}

export default RSVP