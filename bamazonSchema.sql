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
VALUE ("Paper Shredder", "Office", 45.50, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Violin", "Music", 210.99, 135);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("iRobot Roomba", "Appliances", 299.99, 160);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Nylabone", "Pets", 3.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("The Witcher 3: Wild Hunt", "Video Games", 50.99, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Nutribullet", "Kitchen", 49.95, 220);