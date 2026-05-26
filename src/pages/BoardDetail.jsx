import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BASE_URL = "http://54.252.57.70:8080"

function BoardDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`${BASE_URL}/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id])

  const handleDelete = async () => {
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE'
    })
    navigate('/')
  }

  if (!post) return <p className="loading">로딩중...</p>

  return (
    <div className="page">
      <button className="back-btn" onClick={() => navigate('/')}>← 목록으로</button>
      <div className="detail-wrap">
        <h1 className="detail-title">{post.title}</h1>
        <p className="detail-meta">{post.writer}</p>
        <p className="detail-content">{post.content}</p>
      </div>
      <div className="btn-group">
        <button className="btn-secondary" onClick={() => navigate(`/edit/${id}`)}>수정</button>
        <button className="btn-danger" onClick={handleDelete}>삭제</button>
      </div>
    </div>
  )
}

export default BoardDetail