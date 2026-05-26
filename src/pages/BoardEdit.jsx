import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BASE_URL = "/api"

function BoardEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(`${BASE_URL}/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setContent(data.content)
      })
  }, [id])

  const handleEdit = async () => {
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    })
    navigate(`/detail/${id}`)
  }

  return (
    <div className="page">
      <button className="back-btn" onClick={() => navigate(`/detail/${id}`)}>← 돌아가기</button>
      <div className="page-header">
        <h1>글 수정</h1>
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
        <button className="btn-primary" onClick={handleEdit}>수정완료</button>
      </div>
    </div>
  )
}

export default BoardEdit