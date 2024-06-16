-- --------------------------------------------------------

--
-- Adicionar dados para a tabela `announcement`
--

INSERT INTO `announcement` (`id`, `image`, `description`, `status`) VALUES
(1, '1718120727153_ia-micoondas.jpg', 'Banner de anúncio 1', 1),
(2, '1718120740976_ia-micoondas2.jpg', 'Banner de anúncio 2', 1),
(3, '1718120750559_ia-micoondas3.jpg', 'Banner de anúncio 3', 1);

-- --------------------------------------------------------

--
-- Adicionar dados para a tabela `brand`
--

INSERT INTO `brand` (`id`, `name`, `url`, `image`, `status`) VALUES
(1, 'Brastemp', 'https://www.brastemp.com.br/', '1718074937315_s1.png', 1),
(2, 'Consul', 'https://www.consul.com.br/', '1718074954767_s2.png', 1),
(3, 'Britania', 'https://www.britania.com.br/', '1718074970131_s3.png', 1),
(4, 'Electrolux', 'https://loja.electrolux.com.br/', '1718074988087_s4.png', 1),
(5, 'LG', 'https://www.lg.com/br/', '1718075002882_s5.png', 1),
(6, 'Philco', 'https://www.philco.com.br/', '1718075025978_s6.png', 1),
(7, 'Panasonic', 'https://www.panasonic.com/br/', '1718075071337_Webp.net-resizeimage (6).png', 1),
(8, 'Midea', 'https://www.midea.com/br', '1718499131553_logo_midea-removebg-preview.png', 1),
(9, 'Samsung', 'https://www.samsung.com/br/', '1718499226516_Webp.net-resizeimage (7).png', 1),
(10, 'Sharp', 'https://global.sharp/', '1718499337212_Webp.net-resizeimage (8).png', 1);

-- --------------------------------------------------------

--
-- Adicionar dados para a tabela `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`, `subject`, `message`) VALUES
(1, 'Admin Microondas', 'admin@casamicroondas.com', '(41) 98516-3600', 'Teste do formulário', 'Mensagem de teste para testar o formulário de contato');

-- --------------------------------------------------------

--
-- Adicionar dados para a tabela `product`
--

INSERT INTO `product` (`id`, `type`, `description`, `image`, `price`) VALUES
(1, 'Microondas', 'Micro-ondas Philco 25L PM26 Limpa Fácil 1100W', '1718499848076_1xg-removebg-preview.png', 549.90),
(2, 'Microondas', 'Micro-ondas Panasonic 21L NN-ST25L Branco', '1718499998620_74b093300efcb2874fe7f24192275d5c-removebg-preview.png', 559.00),
(3, 'Microondas', 'Micro-ondas Brastemp 32L Espelhado - BMS46AR', '1718500105569_04e2fa353f749ee610120ea09606d563-removebg-preview.png', 806.55),
(4, 'Microondas', 'Micro-ondas LG 30L Preto Solo NeoChef MS3033DSA.FBKGLGZ', '1718500206627_download.png', 854.05),
(5, 'Microondas', 'Micro-ondas Electrolux 23L Preto Efficient - ME23P', '1718500280113_microondas6.png', 651.84),
(6, 'Microondas', 'Micro-ondas Philco 34 Litros Branco PMO34BB - 220V', '1718500344023_philco-micro.png', 619.90),
(7, 'Microondas', 'Micro-ondas Inox Brastemp 20L BMS20 AR', '1718500425782_micro-brastemp.png', 704.06),
(8, 'Microondas', 'Micro-ondas 20 Litros Midea MRAS21 com Função Tira Odor e ECO Branco com Porta Preta 110V', '1718500498566_micro-midea.png', 639.00),
(9, 'Microondas', 'Micro-ondas Electrolux 31L com Grill ME41X - Painel Blue Touch', '1718500711479_micro-9.png', 1367.05),
(10, 'Microondas', 'Micro-ondas Electrolux 23L Prata Efficient - ME23S', '1718500824904_micro-10.png', 664.05);

-- --------------------------------------------------------

--
-- Adicionar dados para a tabela `service`
--

INSERT INTO `service` (`id`, `icon`, `title`, `description`, `status`) VALUES
(1, '1718033721917_material-symbols-light--microwave.png', 'Conserto de Microondas', 'Consertamos seu microondas em até 30 minutos. Temos mais de 2 mil tipos de componentes para substituição imediata.', 1),
(2, '1718206661721_mdi--clock-outline.png', 'Conserto em até 30 minutos', 'Fazemos o reparo em até 30 minutos, desde que o seu microondas não seja importado, tenha vindo de outra oficina ou necessite de pintura.\r\n\r\nO reparo na hora é feito até as 16:30, após esse horário será orçado e consertado no dia seguinte.', 1),
(3, '1718483770280_healthicons--money-bag-outline.png', 'Orçamento', 'Fazemos o orçamento prévio de seu microondas, basta abrir uma pré-os em nosso site!', 1),
(4, '1718033879412_material-symbols-light--build-outline.png', 'Reforma de Microondas', 'Se o seu aparelho é antigo e tem ferrugem, vale a pena reformar. Aparelhos antigos são mais duráveis, mais potentes e não vazam microondas. Hoje todos as marcas existentes são de origem da China.', 1),
(5, '1718033993483_circum--delivery-truck.png', 'Serviço de busca e entrega', 'Buscamos o seu aparelho em toda Curitiba.', 1),
(6, '1718033951467_ion--cart-outline.png', 'Acessórios e Microondas novos / usados', 'Temos pratos, roldanas, cruzetas e outro acessórios para forno de microondas. Também temos microondas a pronta entrega de diversas marcas e modelos direto da fábrica, 127V e 220V.', 1);

-- --------------------------------------------------------

--
-- Adicionar dados para a tabela `user`
--

INSERT INTO `user` (`id`, `email`, `first_name`, `last_name`, `password`) VALUES
(1, 'admin@casamicroondas.com', 'Admin', 'Microondas', '$2b$08$fL9NUS1gcZLyMQExZIQwduFZApnL1H9ui1uUHHIhR3PYjJZ7BXJ1.');