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
      showAllProducts();
  });

  // function that shows products in the terminal in a table and then starts the function to make a purchase
  function showAllProducts() {
      var query = ("SELECT * FROM products");
      connection.query(query, function(err, res) {
          if (err) throw err;
        var table = new Table({
            head: ['Item ID', 'Product', 'Department', 'Price', 'Number In Stock'],
          });
          for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, "$" + res[i].price, res[i].stock_quantity]);
          }
          console.log(table.toString() + "\n");
          makePurchase();
        });
}
  
// function to make a purchase of one of the products listed in the table
function makePurchase() {
  var chosenItem;
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
  // prompt that asks the user which item they would like to purchase
  inquirer
    .prompt([
      {
      name: "purchase",
      type: "input",
      message: "Which item would you like to purchase? Or type exit to end.",
      choices: function() {
        var itemArray = [];
        for (var i = 0; i < results.length; i++) {
          itemArray.push(results[i].item_id);
        }
        itemArray.push("exit")
        return itemArray;
      }
    }
  ])
  .then(function(answer) {
    
    for (var i = 0; i < results.length; i++) {
      if (results[i].item_id == answer.purchase) {
        chosenItem = results[i];
      }
    }
    if (answer.purchase == "exit") {
    connection.end();
    }
    else {numberPurchase(chosenItem);}
  });
  })
}

  function numberPurchase(item) {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    inquirer
    .prompt([
    {
      // prompt that asks the user how many of the selected item they would like to purchase
      name: "number",
      type: "input",
      message: "How many items would you like to purchase?"
    }
  ])
  // finds the selected product
  .then(function(answer) {

    // checks to make sure that there is enough of the selected item in stock. if there is then the stock
    // will be depleted by the total number being purchased.
    if (item.stock_quantity > parseInt(answer.number)) {
      var newQuantity = parseInt(item.stock_quantity - answer.number)
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: newQuantity
          },
          {
            item_id: item.item_id
          }
        ],
        // lists the total price of the purchase
        function(error) {
          if (error) throw err;
          console.log("Total cost: ", item.price * answer.number);
        }
      );
      showAllProducts();
    }
    // if there is not enough of the item in the stock then "insufficient inventory" will be
    // displayed and the function to showallproducts will run.
    else {
      console.log("Insufficient inventory");
      showAllProducts();
    }
  })
});
}