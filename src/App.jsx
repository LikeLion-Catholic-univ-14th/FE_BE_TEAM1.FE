import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardList from './pages/BoardList';
import BoardWrite from './pages/BoardWrite';
import BoardDetail from './pages/BoardDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/write" element={<BoardWrite />} />
        <Route path="/detail/:id" element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;