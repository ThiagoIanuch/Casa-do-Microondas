-- --------------------------------------------------------
--
-- Procedimentos para a tabela `announcement`
--

DELIMITER //

CREATE PROCEDURE GetAnnouncements ()
BEGIN
    SELECT * FROM announcement;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE AddAnnouncement (
    IN p_image VARCHAR(255),
    IN p_description VARCHAR(255),
    IN p_status TINYINT
)
BEGIN
    INSERT INTO announcement (image, description, status)
    VALUES (p_image, p_description, p_status);
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE DeleteAnnouncement (
    IN p_id INT
)
BEGIN
    DELETE FROM announcement WHERE id = p_id;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdateAnnouncement (
    IN p_id INT,
    IN p_image VARCHAR(255),
    IN p_description VARCHAR(255),
    IN p_status TINYINT
)
BEGIN
    UPDATE announcement
    SET image = p_image, description = p_description, status = p_status
    WHERE id = p_id;
END//

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetActiveAnnouncements ()
BEGIN
    SELECT * FROM announcement WHERE status = 1;
END//

DELIMITER ;

-- --------------------------------------------------------
--
-- Procedimentos para a tabela de `brand`
--

DELIMITER //

CREATE PROCEDURE GetBrands()
BEGIN
    SELECT * FROM brand;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE AddBrand(
    IN p_name VARCHAR(100),
    IN p_url VARCHAR(255),
    IN p_image VARCHAR(255),
    IN p_status TINYINT
)
BEGIN
    INSERT INTO brand (name, url, image, status)
    VALUES (p_name, p_url, p_image, p_status);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE DeleteBrand(
    IN p_id INT
)
BEGIN
    DELETE FROM brand WHERE id = p_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdateBrand(
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_url VARCHAR(255),
    IN p_image VARCHAR(255),
    IN p_status TINYINT
)
BEGIN
    UPDATE brand
    SET name = p_name, url = p_url, image = p_image, status = p_status
    WHERE id = p_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetActiveBrands()
BEGIN
    SELECT * FROM brand WHERE status = 1;
END //

DELIMITER ;

DELIMITER //

-- --------------------------------------------------------
--
-- Procedimentos para a tabela de `contact`
--
DELIMITER //

CREATE PROCEDURE GetContacts()
BEGIN
    SELECT * FROM contact;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE SendContact(
    IN p_name VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_phone VARCHAR(15),
    IN p_subject VARCHAR(255),
    IN p_message VARCHAR(5000)
)
BEGIN
    INSERT INTO contact (name, email, phone, subject, message)
    VALUES (p_name, p_email, p_phone, p_subject, p_message);
END //

DELIMITER ;

-- --------------------------------------------------------
--
-- Procedimentos para a tabela de `product`
--

DELIMITER //
CREATE PROCEDURE GetProducts()
BEGIN
    SELECT * FROM product;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE AddProduct(
    IN p_type VARCHAR(50),
    IN p_description VARCHAR(150),
    IN p_image VARCHAR(255),
    IN p_price DECIMAL(10,2)
)
BEGIN
    INSERT INTO product (type, description, image, price)
    VALUES (p_type, p_description, p_image, p_price);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE DeleteProduct (
    IN p_id INT
)
BEGIN
    DELETE FROM product WHERE id = p_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE UpdateProduct (
    IN p_id INT,
    IN p_type VARCHAR(50),
    IN p_description VARCHAR(150),
    IN p_image VARCHAR(255),
    IN p_price DECIMAL(10,2)
)
BEGIN
    UPDATE product
    SET type = p_type,
        description = p_description,
        image = p_image,
        price = p_price
    WHERE id = p_id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetRandomProducts ()
BEGIN
    SELECT * FROM product ORDER BY RAND() LIMIT 5;
END //
DELIMITER ;

-- --------------------------------------------------------
--
-- Procedimentos para a tabela de `service`
--

DELIMITER //

CREATE PROCEDURE `GetServices` ()
BEGIN
    SELECT * FROM service;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE `AddService` (
    IN p_icon VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description VARCHAR(255),
    IN p_status TINYINT
)
BEGIN
    INSERT INTO service (icon, title, description, status)
    VALUES (p_icon, p_title, p_description, p_status);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE `DeleteService` (
    IN p_id INT
)
BEGIN
    DELETE FROM service WHERE id = p_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE `UpdateService` (
    IN p_id INT,
    IN p_icon VARCHAR(255),
    IN p_title VARCHAR(255),
    IN p_description VARCHAR(255),
    IN p_status TINYINT
)
BEGIN
    UPDATE service
    SET icon = p_icon, title = p_title, description = p_description, status = p_status
    WHERE id = p_id;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE `GetActiveServices` ()
BEGIN
    SELECT * FROM service WHERE status = 1;
END //

DELIMITER ;


DELIMITER $$

-- --------------------------------------------------------
--
-- Procedimentos para a tabela de `user`
--

CREATE PROCEDURE CheckEmail(IN emailToCheck VARCHAR(255), OUT emailExists INT)
BEGIN
    SELECT COUNT(*)
    INTO emailExists
    FROM user
    WHERE email = emailToCheck;
END$$

DELIMITER ;
