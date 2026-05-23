import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const BASE_URL = "http://여기에백엔드주소"

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

  if (!post) return <p>로딩중...</p>

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.writer}</p>
      <p>{post.content}</p>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate(`/edit/${id}`)}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  )
}

export default BoardDetail