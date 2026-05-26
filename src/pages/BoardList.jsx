import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import mockData from '../data/mockData'

const BASE_URL = "/api"

function BoardList() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(() => setPosts(mockData))
  }, [])

  return (
    <div className="page">
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>게시판</h1>
          <p>자유롭게 글을 작성해보세요</p>
        </div>
        <button className="btn-small" onClick={() => navigate('/write')}>글쓰기</button>
      </div>
      <div className="card-list">
        {posts.map((post) => (
          <div key={post.id} className="card" onClick={() => navigate(`/detail/${post.id}`)}>
            <div>
              <div className="card-title">{post.title}</div>
              <div className="card-preview">{post.content}</div>
            </div>
            <div className="card-footer">
              <span className="card-writer">by {post.writer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardList