import './css/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx'
import Photos from './pages/photos.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/Photos" element={<Photos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App