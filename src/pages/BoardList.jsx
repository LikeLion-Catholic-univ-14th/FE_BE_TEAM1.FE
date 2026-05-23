import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import mockData from '../data/mockData'

const BASE_URL = "http://여기에백엔드주소"

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
    <div>
      <h1>게시판 목록</h1>
      <button onClick={() => navigate('/write')}>글쓰기</button>
      {posts.map((post) => (
        <div key={post.id} onClick={() => navigate(`/detail/${post.id}`)}>
          {post.title} - {post.writer}
        </div>
      ))}
    </div>
  )
}

export default BoardList