import { BedDouble, Utensils } from "lucide-react"
const WeddingHospitality = () => {
  const hospitalityData = [
    {
      icon: <BedDouble size={25} />,
      title: '住宿安排',
      details: [
        '3天2夜住宿',
        '1/23 - 1/25',
      ],
    },
    {
      icon: <Utensils size={25} />,
      title: '餐食安排',
      details: [
        '1/23 晚餐',
        '1/24 早餐、晚餐',
        '1/25 早餐',
      ],
    },
    {
      icon: <i className="bi bi-car-front"></i>,
      title: '機場接送',
      details: [
        '接機 1/22、1/23',
        '送機 1/25、1/26',
      ],
    },
    {
      icon: <i className="bi bi-airplane"></i>,
      title: '其他時間',
      details: [
        '若於其他日期抵達或離開峇里島，請自行安排交通',
      ],
    },
  ]
  return (<>
    <div className="hospitality-custom">
      <div className="section-title">WHAT WE PROVIDE</div>
      <h3 className="section-header">我們為您準備了</h3>
      <div className="section-heading__divider"></div>
      <div className="section-content">
        {hospitalityData.map((item, index) => {
          return (<div className="infoCard" key={index}>
            <div className="card-icon">
              <div className="icon-circle">
                {item.icon}
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{item.title}</h3>
              {item.details.map((detail, i) => {
                return (<div key={i}>
                  <p className="card-primary">{detail}</p>
                </div>)
              })}
            </div>
          </div>)
        })}
      </div>
    </div>
  </>)
}

export default WeddingHospitality
