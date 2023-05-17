import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import NewPost from './components/crud/NewPost';
import Post from './components/crud/Post';
import Posts from './components/crud/Posts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
