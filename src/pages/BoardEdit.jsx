import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BASE_URL = "http://여기에백엔드주소"

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
    <div>
      <h1>글 수정</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleEdit}>수정완료</button>
    </div>
  )
}

export default BoardEdit