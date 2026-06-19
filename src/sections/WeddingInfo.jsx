// import flowers03 from '../assets/flowers03.png'
import flowers07 from "../assets/flowers07.png"
const WeddingInfo = () => {
  const weddingInfoData = [
    {
      icon: <i className="bi bi-calendar-week i-dark gold-text"></i>,
      title: '日期',
      value: '2027.01.24',
      description: 'Sunday',
      // illustration: blue03,
    },
    {
      icon: <i className="bi bi-clock i-dark gold-text"></i>,
      title: '時間',
      value: '17:30 Ceremony',
      description: '18:30 Reception',
      // illustration: blue01,
    },
    {
      icon: <i className="bi bi-geo-alt i-dark gold-text"></i>,
      title: '地點',
      value: 'HOMM Saranam Baturiti',
      description: 'Bali,Indonesia',
      mapUrl: 'https://maps.app.goo.gl/N4PrS8erK5nMvFSQ7',
    },
  ]
  return (<>
    <div className="weddingInfo-custom dark-section">
      {/* <img src={flowers03} className="flower-bg flower-top-left" alt="" /> */}
      <div className="section-title-dark gold-text">WEDDING INFORMATION</div>
      <h3 className="section-header-dark">婚禮資訊</h3>
      <div className="section-content">
        <img src={flowers07} className="flower-edge flower-center " alt="花卉分隔線" />
        {weddingInfoData.map((item, index) => {
          return (<div className="infoCard" key={index}>
            <div className="card-icon">
              <div className="icon-circle">
                {item.icon}
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-primary gold-text">{item.value}</p>
              <p>{item.description}</p>
              {item.mapUrl && <a href={item.mapUrl} target="_blank" rel="noreferrer" className="map-link">
                查看地圖 <i className="bi bi-chevron-right"></i>
              </a>}
            </div>
            {item.illustration && (<div className="card-illustration">
              <img src={item.illustration} alt={item.title} />
            </div>)}
          </div>)
        })}
      </div>
      {/* <img src={flowers03} className="flower-bg flower-bottom-right" alt="" /> */}
      <div className="anti-line-tape"></div>
    </div>
  </>)
}

export default WeddingInfo