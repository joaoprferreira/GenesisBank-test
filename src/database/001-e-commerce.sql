-- Active: 1685132542593@@localhost@3306@crud

CREATE TABLE
    IF NOT EXISTS PRODUCTS (
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(100) NOT NULL,
        price VARCHAR(50) NOT NULL,
        image TEXT NOT NULL
    )