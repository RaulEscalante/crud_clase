CREATE DATABASE crud_db;
USE crud_db;
CREATE TABLE usuarios(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);  