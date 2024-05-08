import './css/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx'
import Photos from './pages/photos.jsx';
import Login from './pages/login.jsx';
import Construction from './pages/construction.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/photos" element={<Photos/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/construction" element={<Construction/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App