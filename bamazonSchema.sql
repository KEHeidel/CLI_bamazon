DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INTEGER NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("TV", "Electronics", 2000.90, 90);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Planner", "Office", 25.99, 185);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Nintendo Switch", "Electronics", 530.95, 210);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Instant Pot", "Kitchen", 300.93, 85);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Paper Shreader", "Office", 45.50, 250);