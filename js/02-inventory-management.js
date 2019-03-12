/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - Show all products");
    window.console.log("update - Update stock");
    window.console.log("exit - Exit the application");
    window.console.log("");
}

var inventory = [
        [9382, "Jacket", 5, 49.99],
        [2233, "Hat", 12, 14.99],
        [3223, "Socks", 36, 9.99],
        [4824, "Shirt", 10, 15.99],
        [6343, "Jeans", 22, 39.99]
    ];


function showInventory() {
    "use strict";
    var i, sort;
    sort = inventory.sort(function (a, b) {
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    });
    for (i = 0; i < sort.length; i += 1) {
        window.console.log(sort[i] + "\n");
    }

}



function updateInventory() {
    "use strict";
    var sku, i, quantity;
    sku = parseInt(window.prompt("Enter sku number of product"), 10);
    for (i = 0; i < inventory.length; i += 1) {
        if (inventory[i].includes(sku)) {
            quantity = parseInt(window.prompt("Enter new quantity"), 10);
            if (!isNaN(sku)) {
                inventory[i][2] = quantity;
                showInventory();
            } else {
                window.prompt("Try again. Enter new quantity");
            }
        } else {
            window.prompt("Enter a valid sku number");
        }
    }
}


function main() {
    "use strict";
    var command;
    
    displayMenu();

    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                showInventory(inventory);
            } else if (command === "update") {
                updateInventory(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.console.log("That is not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();






