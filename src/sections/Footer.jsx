import { useState, useEffect } from 'react';
import img07 from '../assets/07.png'
const Footer = () => {
  // 1. 設定目標婚禮日期
  const TARGET_DATE = "2027-01-24T00:00:00";

  // 2. 建立計算剩餘時間的函式
  const calculateTimeLeft = () => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    let timeLeft = { days: "00", hours: "00", minutes: "00" };

    if (difference > 0) {
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);

      // 使用 padStart(2, '0') 確保始終保持兩位數（例如 05 天、09 分）
      timeLeft = {
        days: String(d).padStart(2, '0'),
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0')
      };
    }

    return timeLeft;
  };

  // 3. 初始化 state，直接呼叫計算函式避免畫面閃爍預設值
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // 4. 設定計時器每秒更新一次
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // 清除計時器，避免記憶體洩漏 (Memory Leak)
    return () => clearInterval(timer);
  }, []);
  return (<>
    <div className="footer-container">
      <div className="footer-divider-flower"></div>
      <div className="footer-text-section">
        <h3>韋昊良 ＆ 呂易庭</h3>
        <p className='gold-text'>2027.01.24</p>
        {/* 倒數計時方塊區 */}
        <div className="footer-countdown">
          <div className="time-item">
            <span>{timeLeft.days}</span>
            <label>Days</label>
          </div>
          <div className="time-item">
            <span>{timeLeft.hours}</span>
            <label>Hours</label>
          </div>
          <div className="time-item">
            <span>{timeLeft.minutes}</span>
            <label>Minutes</label>
          </div>
        </div>
      </div>
      <div className="footer-photo-wrapper">
        <img src={img07} alt="頁尾婚紗照" />
      </div>
    </div>
  </>)
}

export default Footer