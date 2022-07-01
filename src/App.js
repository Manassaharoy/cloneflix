import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Video from './pages/watch/Video';
import Error from './pages/404/Error';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/watch" element={<Video/>}/>
          <Route path="*" element={<Error />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
