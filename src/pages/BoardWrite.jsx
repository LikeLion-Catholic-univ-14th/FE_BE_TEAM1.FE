import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function BoardWrite() {
  const [title, setTitle] = useState('');
  const [content,setContent] = useState('');
  const navigate = useNavigate()

  return (
    <div>
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
      <button onClick={() => navigate('/')}>작성완료</button>
    </div>
  )
}

export default BoardWrite;