import { useRef, useEffect, useState } from 'react';

const LeaveMessage = () => {
  const [startIndex, setStartIndex] = useState(0)
  const VISIBLE_COUNT = 2;
  const INTERVAL = 3000;
  const wishData = [
    {
      name: '安安',
      wish: '恭喜恭喜~~，新婚愉快',
    },
    {
      name: '依依',
      wish: '測試~~，新婚愉快',
    },
    {
      name: '翰翰',
      wish: '測試2~~，新婚愉快',
    },
    {
      name: '成城',
      wish: '測試3~~，新婚愉快',
    },
    {
      name: '葳葳',
      wish: '測試~~，新婚愉快',
    },
  ]
  const doubled = [...wishData, ...wishData];
  useEffect(() => {
    if (wishData.length <= VISIBLE_COUNT) return;
    const timer = setInterval(() => {
      setStartIndex(prev => (prev + 1) % wishData.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [wishData.length]);


  return (<>
    <div className="leaveMessage-custom">
      <div className="section-title">Leave a Message</div>
      <h3 className="section-header">自由留言板</h3>
      <div className="section-heading__divider"></div>
      <div className="wish-container">
        <div>
          <h5>100則留言</h5>
        </div>
        <div className="input-group">
          <input type="text" name="" id="" className="name" placeholder="名字 Name" />
          <textarea type="text" name="" id="" className="wishes" placeholder="留下您想說的話 Leave your message..." />
        </div>
        <button type="submit" className="wish-btn">送出 Send</button>
      </div>
      <div>
        <div className="message-board-wrapper">
          <div className="message-board-track">
            {doubled.map((item, i) => (
              <div key={i} className="message-board">
                <p className="title">{item.name}</p>
                <p>{item.wish}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default LeaveMessage