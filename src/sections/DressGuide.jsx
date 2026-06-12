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
  ]

  return (<>
    <div className="dressGuide-custom">
      <div className="section-title">DRESS GUIDE</div>
      <h3 className="section-header">穿搭建議</h3>
      <div className="section-heading__divider"></div>
      <div className="section-content">
        <p>我們希望每位賓客都能自在舒服</p>
        <p>參與婚禮，因此沒有特別規定正式服裝。</p>
        <p>如果不確定該如何準備，</p>
        <p>我們建議可以穿著以下色系</p>
      </div>
      <div className="color-container">
        {colorData.map((item, index) => {
          return (<div key={index}>
            <div className={`colorChart ${item.colorChart}`}></div>
            <div>{item.color}</div>
          </div>)
        })}
      </div>
    </div >
  </>)
}

export default DressGuide