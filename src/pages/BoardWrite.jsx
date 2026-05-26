import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BASE_URL = "http://54.252.57.70:8080"

function BoardWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [quote, setQuote] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      })
      const data = await response.json()
      setQuote(data.quote)
      setTimeout(() => navigate('/'), 3000)
    } catch {
      navigate('/')
    }
  }

  return (
    <div className="page">
      {quote && (
        <div className="quote-overlay" onClick={() => navigate('/')}>
          <p className="quote-label">오늘의 명언</p>
          <p className="quote-text">{quote}</p>
          <p className="quote-hint">화면을 터치하면 넘어갑니다</p>
        </div>
      )}
      <div className="page-header">
        <h1>글 작성</h1>
        <p>익명으로 게시됩니다</p>
      </div>
      <div className="form-wrap">
        <div className="form-field">
          <label className="form-label">제목</label>
          <input
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>
        <div className="form-field">
          <label className="form-label">내용</label>
          <textarea
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </div>
        <button className="btn-primary" onClick={handleSubmit}>작성완료</button>
      </div>
    </div>
  )
}

export default BoardWrite;