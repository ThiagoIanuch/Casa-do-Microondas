SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DELIMITER $$

CREATE DEFINER=`cmoadmin`@`%` PROCEDURE `teste` ()   BEGIN
    SELECT * FROM product;
END$$

DELIMITER ;

CREATE TABLE `announcement` (
  `id` int NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `brand` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


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


CREATE TABLE `product` (
  `id` int NOT NULL,
  `type` varchar(50) NOT NULL,
  `description` varchar(150) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `product` (`id`, `type`, `description`, `image`, `price`) VALUES
(42, 'teste', 'Cooktop', 'imagem26.jpg', 699.99),
(47, 'Microondas', 'Microondas', 'imagem14.jpg', 1445.00),
(52, '12', '12', '1234.png', 1212.00),
(55, 'tedte', 'teste', '1234.png', 12345.00),
(57, 'novoproduto', 'produto', '1234.png', 1234.00),
(58, 'aaaaaipo', 'descriçao', '1234.png', 120.00);


CREATE TABLE `service` (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `service` (`id`, `title`, `description`, `icon`, `status`) VALUES
(1, 'Limpeza Residencial', 'Limpeza completa de casas e apartamentos', NULL, 1),
(2, 'Manutenção de Jardim', 'Cuidado e manutenção de jardins e áreas verdes', NULL, 1),
(3, 'Serviço de Encanamento', 'Conserto e instalação de encanamentos', NULL, 1),
(4, 'Instalação Elétrica', 'Instalação e reparo de sistemas elétricos', NULL, 1),
(5, 'Pintura Residencial', 'Pintura interna e externa de residências', NULL, 1);


CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `user` (`id`, `email`, `first_name`, `last_name`, `password`) VALUES
(1, 'thiagoianuch@hotmail.com', 'Thiago', 'Ianuch', '$2b$08$srO/kc1gp0Rd1mB2b0aZV.haSPEcJ2q/kGKaQi5nU06Ubp9J1bhHm'),
(2, 'thiagoianuch@hotmail.comm', 'THIAGO', 'ianuch', '$2b$08$hrZqxIXhwoS2wlmhGZzIwOMJK54V3UNZAk8c2GfAgVXOnLBaj1mN6'),
(3, 'thiagoianuch@hotmail.comoasp', 'THIAGO', 'MARIN', '$2b$08$SsxHX7bao467GuZ74abav.BNAsoC2hBmyGDqkLYd2p9oAWRNksW6y'),
(4, 'leandroleopoldinodasilva@hotmail.com', 'leandro', 'leopoldino', '$2b$08$ipMjTg.Ep7NmPeuIUJnv8egGYLe6Szd7HMcejnq8BbbWygEVUey5a'),
(5, 'teste@hotmail.com', 'DROP DATABASE', 'teste', '$2b$08$nB9bMVZaDbfvXFCtT9C7WuNtpKKJd1DZGfJnfztLB8PtuHWII72/i'),
(6, 'teste@hotmail.comm', 'DROP DATABASE;', 'teste', '$2b$08$/B/.PEC7BSxPjRBMpk0.4eKxxBENOSLMJ6STALYwcliltlYqGuDbS'),
(7, 'teste@hotmail.commm', ';DROP DATABASE;', 'teste', '$2b$08$FfxgHOF6C/Tc1WqBsOXEMOSaEIrZKziKKyXOsuyj7uqa7Yf3LSbk6');


ALTER TABLE `announcement`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `announcement`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;


ALTER TABLE `brand`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;


ALTER TABLE `product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;


ALTER TABLE `service`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;


ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;


DELIMITER //

CREATE PROCEDURE GetServices()
BEGIN
    SELECT * FROM services;
END //


CREATE PROCEDURE AddService(IN p_name VARCHAR(255), IN p_description VARCHAR(255), IN p_status BOOLEAN)
BEGIN
    INSERT INTO services (name, description, status) VALUES (p_name, p_description, p_status);
END //

DELIMITER ;