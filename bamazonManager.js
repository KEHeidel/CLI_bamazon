// npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt");
var Table = require("cli-table3")

// connection for mysql
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Shiloh_519!*",
    database: "bamazon_DB"
  });

  connection.connect(function(err) {
      if (err) throw err;
      managerOptionMenu();
  });

const managerOptionMenu = () => {
    console.log("Welcome to Bamazon Manger Portal.")
    inquirer
    .prompt({
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit"],
    })
    .then(function (response) {
        switch(response.choice) {
            case "View Products for Sale":
                showAllProd();
                break;
            case "View Low Inventory":
                showLowInv();
                break;
            case "Add Inventory":
                addInv();
                break;
            case "Add New Product":
                addNew();
                break;
            case "Exit":
                connection.end();
                console.log ("You have exited the program.");
                break;

        }
    });
};

const showAllProd = () => {
    const sqlQuery = "SELECT * FROM products";
    connection.query(sqlQuery, function (err, res) {
        if (err) throw err;
        var greeting = `\n Here are the current products for sale today.\n`;
        console.log(greeting);
        var table = new Table({
            head: ['Item ID', 'Product', 'Department', 'Price', 'Number In Stock']
        });
        for (let i = 0; i < res.length; i++) {
            table.push([
                res[i].item_id,
                res[i].product_name,
                res[i].department_name,
                res[i].price,
                res[i].stock_quantity,
            ]);
        }
        console.log(table.toString() + "\n");
        managerOptionMenu();
    });
};

const showLowInv = () => {
    const lowInvQuery = "SELECT * FROM products WHERE stock_quantity <= 5";
    connection.query(lowInvQuery, function (err, res) {
        if (err) throw err;
        const greeting = `\n Here are the current products with a low inventory.\n`;
        console.log(greeting);
        console.table(res);
        managerOptionMenu();
    });
};

const addInv = (inventory) => {
    console.table(inventory);
    inquirer
    .prompt([
        {
            type: "input",
            message: `\n Please enter the ID of the item you would like to add to.`,
            name: "choice",
            validate: function(val) {
                if (isNaN(val) === false) {
                    return true;
                }
                return false;
            }
        }
    ])
    .then(function(val) {
        
    })
}