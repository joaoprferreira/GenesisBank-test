-- Active: 1685132542593@@localhost@3306@crud

CREATE DATABASE ecommerce IF NOT EXISTS;

use ecommerce;

CREATE TABLE
    IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTO_INCREMENT UNIQUE,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(100) NOT NULL,
        price VARCHAR(50) NOT NULL,
        image TEXT NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS shoppingCart(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        product_id INT,
        quantity INTEGER,
        total DECIMAL(10, 2),
        FOREIGN KEY (product_id) REFERENCES products(id)
    )
describe products