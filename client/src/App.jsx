import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './css/global.css';
import Cookies from 'js-cookie';
import axios from 'axios'
import Menu from './components/menu.jsx'
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
import Footer from './components/footer'

function App() {
  // Dados do usuário
  const [user, setUser] = useState(null);

  // Validar o token
  const validateToken = async () => {
    const token = Cookies.get('token');

    if(token) {
      try {
        const response = await axios.get('http://localhost:8080/api/user/get', {
          withCredentials: true 
        });          
        setUser(response.data);
      } catch (error) {
        console.log('Erro ao validar o token:', error);
      }
    } 
    else {
      console.log('Nenhum cookie encontrado');
    }
  };

  // Chamar a validação para verificar se o usuário está logado
  useEffect(() => {
      validateToken();
  }, []);

  return (
    <div className="App">
      { !location.pathname.startsWith('/admin-panel') && 
        <FloatingWhatsApp phoneNumber="+5541985163600" avatar="avatar-whatsapp.jpg" accountName="Casa do Microondas" statusMessage="Responde em poucos minutos" chatMessage="Olá, como podemos ajudá-lo?" placeholder="Digite uma mensagem"/>
      }
      <BrowserRouter>
        {(!location.pathname.startsWith('/admin-panel') || !user?.admin) && <Menu user={user} />}

        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/photos" element={<Photos/>}></Route>
          {!user && <Route path="/register" element={<Register />} />}
          {!user && <Route path="/login" element={<Login />} />}
          <Route path="/construction" element={<Construction/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
          <Route path="/service-order" element={<ServiceOrder user={user} />} />
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<NotFound/>} />
          {user && user.admin === 1 && (
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
          )}
        </Routes>

        {(!location.pathname.startsWith('/admin-panel') || !user?.admin) && <Footer />}
      </BrowserRouter>
    </div>
  )
}

export default App;