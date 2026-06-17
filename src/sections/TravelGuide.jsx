import { FileText, Wallet, Plane } from "lucide-react"
const TravelGuide = () => {
  const travelGuideData = [
    {
      bgColor: 'cardA',
      icons: <FileText size={30} />,
      title: '簽證申辦',
      content: [`於抵達峇里島前2天申請，需上傳護照及大頭照，護照有效期限至少大於6個月，需有回程機票與飯店資訊，每個團體可由一位代表填寫所有人的資訊，簽證費用為IDR 500,000`, `最後會收到EVOA電子檔，記得把檔案存起來[強調唯一官方網站，網路上有很多假網站詐騙]`],
      btn: [
        {
          text: '落地簽證申辦教學',
          url: 'https://tw.trip.com/guide/info/%E5%B3%87%E9%87%8C%E5%B3%B6%E7%B0%BD%E8%AD%89.html'
        },
        {
          text: '落地簽證申辦官方網站',
          url: 'https://evisa.imigrasi.go.id/'
        },
      ],
    },
    {
      bgColor: 'cardB',
      icons: <Plane size={30} />,
      title: '入境資訊',
      content: ['入境前三天申請，每個團體可由一位代表填寫所有人的資訊，申請完會有QR code，記得用手機截圖或列印出來'],
      btn: [
        {
          text: '海關申報網站',
          url: 'https://allindonesia.imigrasi.go.id/'
        },
      ],
    },
    {
      bgColor: 'cardC',
      icons: <Wallet size={30} />,
      title: '旅遊觀光稅',
      content: ['每個團體可由一位代表填寫所有人的資訊，費用為IDR 150,000'],
      btn: [
        {
          text: '旅遊觀光稅網站',
          url: 'https://lovebali.baliprov.go.id/home?spm=BlogArticle.InArticleHyperlinkWord&clickId=73e8f00242'
        },
      ],
    },
  ]
  return (<>
    <div className="travelGuide-custom">
      <div className="section-title">TRAVEL GUIDE</div>
      <h3 className="section-header">行前準備</h3>
      <div className="section-heading__divider"></div>
      <div className="card-container">
        {travelGuideData.map((item, index) => {
          return (<div className={`card-header ${item.bgColor}`} key={index}>
            <div className="card-group">
              <div className="header-group">
                {item.icons}
                <h2>{item.title}</h2>
              </div>
              {item.btn.map((url, i) => {
                return (
                  <div key={i}>
                    <a href={url.url} target="_blank" rel="noreferrer" className="travel-link">
                      {url.text} <i className="bi bi-chevron-right"></i>
                    </a>
                  </div>
                )
              })}
              <div className="notice">注意事項</div>
              {item.content.map((notice, i) => {
                return (
                  <p key={i}>{notice}</p>
                )
              })}
            </div>
          </div>)
        })}
      </div>

    </div>
  </>)
}

export default TravelGuide