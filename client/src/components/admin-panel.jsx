import { Outlet } from 'react-router-dom';
import LeftMenu from './left-menu.jsx'
import FooterAdmin from './footer-admin.jsx'
import '../css/admin-panel.css'

function AdminPanel() {
    document.body.classList.add('admin-body');

    return (
        <>            
            <div className="container">
                <div className="menu-container">
                    <LeftMenu></LeftMenu>
                </div>
                <div className="content-container">
                    <Outlet />
                </div>
            </div>

            <FooterAdmin></FooterAdmin>
        </>
    )
}

export default AdminPanel;