import mockData from '../data/mockData'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function BoardList() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState(mockData)

  return (
    <div>
      <h1>게시판 목록</h1>
      <button onClick={() => navigate('/write')}>글쓰기</button>
      {posts.map((post) => {
        return (
          <div onClick={() => navigate(`/detail/${post.id}`)}>
            {post.title}
          </div>
        )
      })}
    </div>
  )
}

export default BoardList