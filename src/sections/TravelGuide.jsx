import { FileText, Wallet, Plane, ChevronDown } from "lucide-react"
const TravelGuide = () => {
  const travelGuideData = [
    {
      icons: <FileText size={30} />,
      title: '簽證申辦',
      content: '建議出發前申請電子簽證。',
    },
    {
      icons: <Plane size={30} />,
      title: '入境資訊',
      content: '請於出發前填寫電子海關申報。',
    },
    {
      icons: <Wallet size={30} />,
      title: '旅遊觀光稅',
      content: '每位旅客需繳納 150,000 IDR。',
    },
  ]
  return (<>
    <div className="travelGuide-custom">
      <div className="section-title">TRAVEL GUIDE</div>
      <h3 className="section-header">行前準備</h3>
      <div className="section-heading__divider"></div>
      <div className="card-container">
        {travelGuideData.map((item, index) => {
          return (<div className="card-header" key={index}>
            <div className="card-group">
              <div className="header-group">
                {item.icons}
                <h2>{item.title}</h2>
              </div>
              <p>{item.content}</p>
            </div>
          </div>)
        })}
      </div>

    </div>
  </>)
}

export default TravelGuide