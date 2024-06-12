INSERT INTO `brand` (`id`, `name`, `image`) VALUES
(1, 'Panasonic', ''),
(2, 'Midea', ''),
(3, 'Electrolux', ''),
(4, 'Samsung', ''),
(5, 'LG', ''),
(6, 'Consul', ''),
(7, 'Brastemp', ''),
(8, 'Philco', ''),
(9, 'CCE', ''),
(10, 'Sharp', '');

INSERT INTO `product` (`id`, `type`, `description`, `image`, `price`) VALUES
(42, 'teste', 'Cooktop', 'imagem26.jpg', 699.99),
(47, 'Microondas', 'Microondas', 'imagem14.jpg', 1445.00),
(52, '12', '12', '1234.png', 1212.00),
(55, 'tedte', 'teste', '1234.png', 12345.00),
(57, 'novoproduto', 'produto', '1234.png', 1234.00),
(58, 'aaaaaipo', 'descriçao', '1234.png', 120.00);

INSERT INTO `service` (`id`, `title`, `description`, `icon`, `status`) VALUES
(1, 'Limpeza Residencial', 'Limpeza completa de casas e apartamentos', NULL, 1),
(2, 'Manutenção de Jardim', 'Cuidado e manutenção de jardins e áreas verdes', NULL, 1),
(3, 'Serviço de Encanamento', 'Conserto e instalação de encanamentos', NULL, 1),
(4, 'Instalação Elétrica', 'Instalação e reparo de sistemas elétricos', NULL, 1),
(5, 'Pintura Residencial', 'Pintura interna e externa de residências', NULL, 1);

INSERT INTO `user` (`id`, `email`, `first_name`, `last_name`, `password`) VALUES
(1, 'thiagoianuch@hotmail.com', 'Thiago', 'Ianuch', '$2b$08$srO/kc1gp0Rd1mB2b0aZV.haSPEcJ2q/kGKaQi5nU06Ubp9J1bhHm'),
(2, 'thiagoianuch@hotmail.comm', 'THIAGO', 'ianuch', '$2b$08$hrZqxIXhwoS2wlmhGZzIwOMJK54V3UNZAk8c2GfAgVXOnLBaj1mN6'),
(3, 'thiagoianuch@hotmail.comoasp', 'THIAGO', 'MARIN', '$2b$08$SsxHX7bao467GuZ74abav.BNAsoC2hBmyGDqkLYd2p9oAWRNksW6y'),
(4, 'leandroleopoldinodasilva@hotmail.com', 'leandro', 'leopoldino', '$2b$08$ipMjTg.Ep7NmPeuIUJnv8egGYLe6Szd7HMcejnq8BbbWygEVUey5a'),
(5, 'teste@hotmail.com', 'DROP DATABASE', 'teste', '$2b$08$nB9bMVZaDbfvXFCtT9C7WuNtpKKJd1DZGfJnfztLB8PtuHWII72/i'),
(6, 'teste@hotmail.comm', 'DROP DATABASE;', 'teste', '$2b$08$/B/.PEC7BSxPjRBMpk0.4eKxxBENOSLMJ6STALYwcliltlYqGuDbS'),
(7, 'teste@hotmail.commm', ';DROP DATABASE;', 'teste', '$2b$08$FfxgHOF6C/Tc1WqBsOXEMOSaEIrZKziKKyXOsuyj7uqa7Yf3LSbk6');