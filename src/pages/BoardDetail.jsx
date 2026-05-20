import { useParams } from 'react-router-dom'
import posts from '../data/mockData'
import { useNavigate } from 'react-router-dom'

function BoardDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find((p) => p.id === Number(id))

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.writer}</p>
      <p>{post.content}</p>
      <button onClick={() => navigate('/')}>삭제</button>
    </div>
    
  )
}

export default BoardDetail