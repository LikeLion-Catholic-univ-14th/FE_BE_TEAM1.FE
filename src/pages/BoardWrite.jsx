import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BASE_URL = "http://여기에백엔드주소"

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
    <div onClick={() => quote && navigate('/')}> 
      <h1>글 작성</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      {quote && <p>오늘의 명언: {quote}</p>}
      <button onClick={handleSubmit}>작성완료</button>
    </div>
  )
}

export default BoardWrite;