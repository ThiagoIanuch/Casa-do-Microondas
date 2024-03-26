import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx'
import './css/global.css'

function App() {

  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App