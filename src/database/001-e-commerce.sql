-- Active: 1685132542593@@localhost@3306@crud

CREATE DATABASE ecommerce;

use ecommerce;

CREATE TABLE
    IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTO_INCREMENT UNIQUE,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(100) NOT NULL,
        price VARCHAR(50) NOT NULL,
        image TEXT NOT NULL,
        category VARCHAR(45) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS shopping_cart(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        product_id INT,
        amount INTEGER,
        total DECIMAL(10, 2),
        FOREIGN KEY (product_id) REFERENCES products(id)
    )