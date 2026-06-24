import axios from 'axios';
import { useEffect, useState } from 'react';

const CACHE_KEY = 'leaveMessage_wishData';
const CACHE_TTL = 5 * 60 * 1000;

const LeaveMessage = () => {
  const messageUrl = 'https://sheetdb.io/api/v1/d5dwn32jkxkgb'
  const [wishData, setWishData] = useState([]);
  const [form, setForm] = useState({ name: '', wishes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getWish = async () => {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          setWishData(data);
          return;
        }
      }
      try {
        const res = await axios.get(messageUrl);
        setWishData(res.data);
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: res.data,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error('讀取留言失敗', error)
      }
    }
    getWish();
  }, [])

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.wishes.trim()) return;
    setIsSubmitting(true);
    try {
      const res = await axios.post(messageUrl, { data: [form] })
      const updated = [...wishData, form];
      setWishData(updated);
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: updated,
        timestamp: Date.now()
      }));
      setForm({ name: '', wishes: '' })
      console.log('成功', res.data);
    } catch (error) {
      console.error('送出失敗', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const doubled = [...wishData, ...wishData];

  return (<>
    <div className="leaveMessage-custom">
      <div className="section-title">Leave a Message</div>
      <h3 className="section-header">自由留言板</h3>
      <div className="section-heading__divider"></div>
      <div className="wish-container">
        <div>
          <h5>{wishData.length}則留言</h5>
        </div>
        <div className="wish-input-group">
          <input type="text"
            name=""
            value={form.name}
            className="name"
            placeholder="名字 Name"
            onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
          />
          <textarea type="text"
            name=""
            value={form.wishes}
            className="wishes"
            placeholder="留下您想說的話 Leave your message..."
            onChange={e => setForm(prev => ({ ...prev, wishes: e.target.value }))}
          />
        </div>
        <button type="submit"
          className="wish-btn"
          onClick={handleSubmit}
          disabled={isSubmitting || !form.name.trim() || !form.wishes.trim()}>
          {isSubmitting ? '送出中 Sending...' : '送出 Send'}
        </button>
      </div>
      <div>
        <div className="message-board-wrapper">
          <div className="message-board-track">
            {doubled.map((item, i) => (
              <div key={i} className="message-board">
                <p className="title">{item.name}</p>
                <p>{item.wishes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default LeaveMessage