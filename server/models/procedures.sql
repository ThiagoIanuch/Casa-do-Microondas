DELIMITER //

CREATE PROCEDURE GetServices()
BEGIN
    SELECT * FROM services;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetContacts()
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN

        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ocorreu um erro ao carregar os contatos';
    END;

    SELECT * FROM contact;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE AddContact(
    IN p_name VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_phone VARCHAR(20),
    IN p_subject VARCHAR(255),
    IN p_message TEXT
)
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN

        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Erro ao adicionar contato';
    END;

    INSERT INTO contact (name, email, phone, subject, message) 
    VALUES (p_name, p_email, p_phone, p_subject, p_message);
    
    SELECT 'contato adicionado com sucesso' AS msg;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE DeleteContact(
    IN p_id INT
)
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN

        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ocorreu um erro ao deletar o contato';
    END;

    DELETE FROM contact WHERE id = p_id;

    SELECT 'contato deletado com sucesso' AS msg;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdateContact(
    IN p_id INT,
    IN p_name VARCHAR(255),
    IN p_email VARCHAR(255),
    IN p_phone VARCHAR(20),
    IN p_subject VARCHAR(255),
    IN p_message TEXT
)
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN

        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ocorreu um erro ao atualizar o contato';
    END;

    UPDATE contact 
    SET name = p_name, 
        email = p_email, 
        phone = p_phone, 
        subject = p_subject, 
        message = p_message 
    WHERE id = p_id;
    
    SELECT 'contato atualizado com sucesso' AS msg;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetProducts()
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN

        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ocorreu um erro ao obter os produtos';
    END;

    SELECT * FROM product;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE AddProduct(
    IN p_type VARCHAR(255),
    IN p_description TEXT,
    IN p_image VARCHAR(255),
    IN p_price DECIMAL(10, 2)
)
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN

        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Erro ao adicionar produto';
    END;

    INSERT INTO product (type, description, image, price) 
    VALUES (p_type, p_description, p_image, p_price);
    
    SELECT 'Produto adicionado com sucesso' AS msg;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE DeleteProduct(
    IN p_id INT
)
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN

        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ocorreu um erro ao deletar o produto';
    END;

    DELETE FROM product WHERE id = p_id;
    
    SELECT 'Produto deletado com sucesso' AS msg;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdateProduct(
    IN p_id INT,
    IN p_type VARCHAR(255),
    IN p_description TEXT,
    IN p_price DECIMAL(10, 2)
)
BEGIN
    DECLARE exit handler FOR SQLEXCEPTION
    BEGIN
    
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Ocorreu um erro ao atualizar o produto';
    END;

    UPDATE product 
    SET type = p_type, 
        description = p_description, 
        price = p_price 
    WHERE id = p_id;
    
    SELECT 'Produto atualizado com sucesso' AS msg;
END //

DELIMITER ;