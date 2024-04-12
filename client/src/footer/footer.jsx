import "client/src/css/footer.css"

export function footer(){
    return(
<body>
    <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>Fale conosco</h1>
                <div id="footer_numbers">
                    <a href="#" class="footer_link" id="telephone">
                        <i class="fa-solid fa-phone"></i>
                        (41)3332-8000
                    </a>
                    <a href="#" class="footer_link" id="whatsapp">
                        <i class="fa-brands fa-whatsapp"></i>
                        (41)98516-3600
                    </a>
                    <a href="#" class="footer_link" id="whatsapp">
                        <i class="fa-brands fa-whatsapp"></i>
                        (41)98516-3602
                    </a>
                </div>
            </div>
            <ul class="footer-list">
                <li>
                    <h3>Onde estamos</h3>
                </li>
                <li>
                    <a href="#" class="footer_link">Loja 1 - Avenida Presidente Kennedy <br>410, rebouças - Curitiba</a>
                </li>
                <li>
                    <a href="#" class="footer_link">Loja 2 - Rua Saturnino Miranda, 84 - <br> Santa Felicidade - Curitiba</a>
                </li>
            </ul>
            <ul class="footer-list">
                <li>
                    <h3>Peça ja seu orçamento</h3>
                </li>
                <li>
                    <a>contate-nos! Buscamos e entregamos seu aparelho </a>
                </li>
                <li>
                    <a>Devido a pandemia do COVID-19 estamos atendendo das 8:30 as 17:30 e a avaliação na hora é feita até as 16h</a>
                </li>
                <li>
                    <a href="#" class="footer_link">
                        Entre em contato
                    </a>
                </li>
            </ul>
            <ul class="footer-list">
                <li>
                    <h3>Tema</h3>
                </li>
                <li>
                    <a href="#" class="footer_link">
                        <i class="fa-regular fa-sun"></i> Tema claro
                    </a>
                </li>
                <li>
                    <a href="#" class="footer_link">
                        <i class="fa-regular fa-moon"></i> Tema escuro
                    </a>
                </li>
                <li>
                    <a href="#" class="footer_link">
                        <i class="fa-solid fa-desktop"></i> Tema do sitema
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</body>
    );
}