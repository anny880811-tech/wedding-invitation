// import blue01 from '../assets/mist-blue01.png'
// import blue03 from '../assets/mist-blue03.png'

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
      <div className="section-title-dark gold-text">WEDDING INFORMATION</div>
      <h3 className="section-header-dark">婚禮資訊</h3>
      <div className="section-content">
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
    </div>
  </>)
}

export default WeddingInfo