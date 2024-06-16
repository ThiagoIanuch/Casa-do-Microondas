import '../css/info.css';
import { Icon } from '@iconify/react';

function Info() {
    return (
        <div className="info-container">
            <div className="hours-container">
                <Icon icon="jam:clock-f" className="info-icon"/>
                <h4>Horário de atendimento</h4>
                <p className="info-item">Seg a Sex das 08h30 às 17h30 e Sab das 09h às 13h.</p>
                <p className="info-item">A avaliação na hora é feita até às 16h.</p>
            </div>
            <div class="locations-container">
                <Icon icon="mdi:address-marker" className="info-icon icon-address"/>
                <h4>Endereço</h4>
                <a href="/location" className="info-link">Loja 1 - Avenida Presidente Kennedy 410, Rebouças - Curitiba</a>
                <a href="/location" className="info-link">Loja 2 - Rua Saturnino Miranda, 84 - Santa Felicidade - Curitiba</a>
            </div>
        </div>
    )
}

export default Info;