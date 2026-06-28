const DressGuide = () => {
  const colorData = [
    {
      color: '象牙白',
      colorChart: 'color-ivory',
    },
    {
      color: '灰綠色',
      colorChart: 'color-sage',
    },
    {
      color: '勃根地紅',
      colorChart: 'color-burgundy',
    },
    {
      color: '霧藍色',
      colorChart: 'color-mist-blue',
    },
    {
      color: '深藍色',
      colorChart: 'color-blue',
    },
  ]

  return (<>
    <div className="dressGuide-custom">
      <div className="section-title">DRESS GUIDE</div>
      <h3 className="section-header">穿搭建議</h3>
      <div className="section-heading__divider"></div>
      <div className="section-content">
        <p>我們希望每位賓客都能開心自在，沒有特別要求穿著，如果您不確定要如何準備，
          我們推薦以下色系，因為它們與婚禮場地的自然景觀及整體佈置相得益彰，能夠共同營造溫暖且和諧的氛圍</p>
        <p className="en">We recommend the following color palette, as it works harmoniously with the wedding venue’s natural surroundings and overall décor to create a warm and inviting atmosphere.</p>

      </div>
      <div className="color-container">
        {colorData.map((item, index) => {
          return (<div key={index}>
            <div className={`colorChart ${item.colorChart}`}></div>
            <div className="title">{item.color}</div>
          </div>)
        })}
      </div>
    </div >
    <div className="note-custom">
      <div className="section-title">FROM OUR HEARTS</div>
      <h3 className="section-header">我們的心意</h3>
      <div className="section-heading__divider"></div>
      <div className="section-content">
        <p>感謝各位舟車勞頓參與我們的婚禮。我們將負擔婚禮期間三天兩夜的住宿、部分餐食及機場接送費用，希望大家能盡情享受這趟旅程!
        </p>
        <p className="en">Thank you for traveling to celebrate our wedding with us. We will provide two nights of accommodation, selected meals, and airport transfers. We hope you enjoy the journey!
        </p>
      </div>
    </div>
  </>)
}

export default DressGuide