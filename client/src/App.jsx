import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx'
import './css/global.css'
import Fotos from './pages/fotos.jsx';

function App() {

  const root = document.documentElement;
  root.classList.add('dark-theme');
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/" element={<Fotos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App