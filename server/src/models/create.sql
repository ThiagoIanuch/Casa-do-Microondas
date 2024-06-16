-- --------------------------------------------------------

--
-- Criar o banco de dados `casa_microondas` e utilizar ele
--

CREATE DATABASE CasaMicroondas;

USE CasaMicroondas;

-- --------------------------------------------------------

--
-- Estrutura para tabela `announcement`
--

CREATE TABLE `announcement` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `image` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `status` TINYINT NOT NULL DEFAULT '0'
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `brand`
--

CREATE TABLE `brand` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `status` TINYINT NOT NULL DEFAULT '0'
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `contact`
--

CREATE TABLE `contact` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `message` VARCHAR(5000)  NOT NULL
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `product`
--

CREATE TABLE `product` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `type` VARCHAR(50) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `service`
--

CREATE TABLE `service` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `icon` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `status` TINYINT NOT NULL DEFAULT '0'
);


-- --------------------------------------------------------

--
-- Estrutura para tabela `service_order`
--

CREATE TABLE service_order (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int NOT NULL,
  `phone` VARCHAR(15) NOT NULL,
  `type` VARCHAR(50) NOT NULL,
  `brand_id` int NOT NULL,
  `model` VARCHAR(50) NOT NULL,
  `description` VARCHAR(5000) NOT NULL
);

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `password` VARCHAR(60) NOT NULL
);

-- --------------------------------------------------------

--
-- Adicionar chaves estrangeiras na tabela `service_order`
--

ALTER TABLE `service_order`
ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `service_order`
ADD CONSTRAINT `fk_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand`(`id`);