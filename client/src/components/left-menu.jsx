import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function LeftMenu({ user }) {
    return (
        <div className="left-menu">
            <div className="logo">
                <a href="/"><img src="/logo.png"></img></a>
            </div>

            <ul className="itens-container">
                <li className="item item-user">{'@' + user.first_name + ' ' + user.last_name}</li> 
                <li className="item">
                    <Link to="/admin-panel" className="item-link">
                        <Icon icon="mynaui:home" className="icon-size" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/admin-panel/banners" className="item-link">
                        <Icon icon="jam:picture" className="icon-size" />
                        <span>Anúncios</span>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/admin-panel/brands" className="item-link">
                        <Icon icon="jam:tag" className="icon-size" />
                        <span>Marcas</span>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/admin-panel/services" className="item-link">
                        <Icon icon="dashicons:admin-tools" className="icon-size" />
                        <span>Serviços</span>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/admin-panel/products" className="item-link">
                        <Icon icon="dashicons:cart" className="icon-size" />
                        <span>Produtos</span>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/admin-panel/service-orders" className="item-link">
                        <Icon icon="clarity:clipboard-solid" className="icon-size"/>                        
                        <span>Ordens de serviço</span>
                    </Link>
                </li>
                <li className="item">
                    <Link to="/admin-panel/contacts" className="item-link">
                        <Icon icon="ic:sharp-email" className="icon-size"/>                        
                        <span>Contatos</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu;