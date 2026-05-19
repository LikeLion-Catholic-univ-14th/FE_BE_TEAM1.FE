import posts from '../data/mockData';

function BoardList() {
  return (
  <div>
    <h1>게시판 목록</h1>
    {posts.map((post) => {
      return <div>{post.title}</div>
    })}
  </div>
  )
}

export default BoardList;