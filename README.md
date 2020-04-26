
# CLI_bamazon

This app shows a list of products and allows the user to select a product to purchase and indicate how many of the product they want. The app will then give the total for the purchase.

---

## TECHNOLOGIES USED

- [Node.js](https://nodejs.org/en/docs/) _an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications_
- [mysql](https://dev.mysql.com/doc/) _database_
- [inquirer](https://www.npmjs.com/package/inquirer) _collection of interactive command line user interfaces_
- [prompt](https://www.npmjs.com/package/prompt) _command line prompt for node.js_
- [cli-table3](https://www.npmjs.com/package/cli-table3) _renders tables on the command line from node.js scripts_

---

## PREREQUISTS

- [mysql module](https://www.npmjs.com/package/mysql) _npm install mysql_
- [inquirer module](https://www.npmjs.com/package/inquirer) _npm install inquirer_
- [prompt module](https://www.npmjs.com/package/prompt) _npm install prompt_
- [cli-table3 module](https://www.npmjs.com/package/cli-table3) _npm install cli-table3_

---

## PRODUCT FEATURES

- In the terminal the user will type "node bamazonCustomer.js".

![terminalcommand](images/commandline.png)

- This will pull up a table of the products listed for sale. The table will list the item ID, the product name, the department, price per unit, and the total number in stock.

![producttable](images/producttable.png)

- A prompt will then appear asking the user which product they would like to purchase.

![itempurchaseblank](images/itempurchaseblank.png)

- The user can then input the item ID of the item they would like.

![itempurchaseselected](images/itempurchaseselected.png)

- A prompt will then appear asking the user how many of that product they would like to purchase.

![numberpurchaseblank](images/numberpurchaseblank.png)

- The user can then input the number of items they would like to purchase.

![numberpurchaseselected](images/numberpurchaseselected.png)

- The total price of the purchase will then be shown to the user.

![totalpurchaseprice](images/totalpurchaseprice.png)

- The products table will then be updated showing the new stock quantity for the product purchased.

![updatedproducttable](images/updatedproducttable.png)

- The prompt will then reappear asking the user which item they would like to purchase. The user can then select another item or they can type exit to end the program.

![endprogram](images/endprogram.png)

---

## Author

- [Kortnie Heidel](mailto:kortnie.evans@gmail.com)