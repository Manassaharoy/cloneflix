import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Video from './pages/watch/Video';
import Error from './pages/404/Error';
import ProtectedRoute from './utils/ProtectedRoutes';
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
   <BrowserRouter>
    <UserAuthContextProvider>
        <Routes>
            <Route path="/" element={
              
                <Home />
              }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/watch" element={
              <ProtectedRoute>
                <Video/>
              </ProtectedRoute>}/>
            <Route path="*" element={<Error />} />
        </Routes>
    </UserAuthContextProvider>
   </BrowserRouter>
  );
}

export default App;
