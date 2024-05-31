import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

function LeftMenu() {
    return (
        <div className="left-menu">
            <div className="logo">
                <img src="/logo.png"></img>
            </div>

            <ul className="itens-container">
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
            </ul>
        </div>
    )
}

export default LeftMenu;