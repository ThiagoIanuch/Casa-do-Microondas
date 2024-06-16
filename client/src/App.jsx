import './css/global.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Index from './pages/index.jsx';
import Photos from './pages/photos.jsx';
import Register from './pages/register.jsx';
import Login from './pages/login.jsx';
import Construction from './pages/construction.jsx';
import Location from './pages/location.jsx';
import ServiceOrder from './pages/service-order.jsx'
import Contact from './pages/contact.jsx';
import AdminPanel from './components/admin-panel.jsx';
import AdminHome from './pages/admin-home.jsx';
import AdminBanners from './pages/admin-banners.jsx';
import AdminBrands from './pages/admin-brands.jsx';
import AdminServices from './pages/admin-services.jsx';
import AdminProducts from './pages/admin-products.jsx';
import AdminOrders from './pages/admin-orders.jsx';
import AdminContacts from './pages/admin-contacts.jsx';
import NotFound from './pages/not-found.jsx'

function App() {
  return (
    <div className="App">
      { !location.pathname.startsWith('/admin-panel') && 
        <FloatingWhatsApp phoneNumber="+5541985163600" avatar="avatar-whatsapp.jpg" accountName="Casa do Microondas" statusMessage="Responde em poucos minutos" chatMessage="Olá, como podemos ajudá-lo?" placeholder="Digite uma mensagem"/>
      }
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/photos" element={<Photos/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/construction" element={<Construction/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/service-order" element={<ServiceOrder/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<NotFound/>} />
          <Route path="/admin-panel/*" element={<AdminPanel/>}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<AdminHome/>} />
            <Route path="banners" element={<AdminBanners/>} />
            <Route path="brands" element={<AdminBrands/>} />
            <Route path="services" element={<AdminServices/>} />
            <Route path="products" element={<AdminProducts/>} />
            <Route path="service-orders" element={<AdminOrders/>} />
            <Route path="contacts" element={<AdminContacts/>} />
            <Route path="*" element={<Navigate to="/admin-panel/home" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;