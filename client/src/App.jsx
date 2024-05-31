import './css/global.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/index.jsx';
import Photos from './pages/photos.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Construction from './pages/construction.jsx';
import Location from './pages/location.jsx';
import Contact from './pages/contact.jsx';
import AdminPanel from './pages/admin-panel.jsx';
import AdminHome from './pages/admin-home.jsx';
import AdminBanners from './pages/admin-banners.jsx';
import AdminBrands from './pages/admin-brands.jsx';
import AdminServices from './pages/admin-services.jsx';
import AdminProducts from './pages/admin-products.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/photos" element={<Photos/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/construction" element={<Construction/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/admin-panel/*" element={<AdminPanel/>}>
            <Route index element={<AdminHome/>} />
            <Route path="banners" element={<AdminBanners/>} />
            <Route path="brands" element={<AdminBrands/>} />
            <Route path="services" element={<AdminServices/>} />
            <Route path="products" element={<AdminProducts/>} />
            <Route path="*" element={<Navigate to="/admin-panel" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
