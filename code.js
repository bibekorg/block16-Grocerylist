const items = [
    { id: 1, name: "grape", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "kiwi", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "papaya", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "beans", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "carrot", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "lassi", price: 5.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "butter", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "pasta", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [];

// Function to log item names
function logItemNames() {
    items.forEach(item => {
        console.log(item.name);
    });
}

// Function to find an item by ID
function findItemById(id) {
    return items.find(item => item.id === id);
}

// Function to capitalize item names
function capitalizeNames() {
    return items.map(item => {
        return { ...item, name: item.name.charAt(0).toUpperCase() + item.name.slice(1) };
    });
}

// Function to calculate the total inventory
function calculateTotalInventory() {
    return items.reduce((total, item) => total + item.inventory, 0);
}

// Function to calculate the total price of all inventory items
function calculateAllInventoryPrice() {
    return items.reduce((total, item) => total + (item.price * item.inventory), 0);
}

// Function to get the price of an item by name
function getItemPriceByName(name) {
    const item = items.find(item => item.name === name);
    return item ? item.price : "Item not found";
}

// Function to filter items by category ID
function filterItemsByCategoryId(categoryId) {
    return items.filter(item => item.categoryId === categoryId);
}

// Function to log cart items
function logCartItems() {
    cart.forEach(itemId => {
        const item = findItemById(itemId);
        if (item) {
            console.log(item.name);
        }
    });
}

// Function to calculate the total price of items in the cart
function calculateTotalCartPrice() {
    let total = 0;
    cart.forEach(itemId => {
        const item = findItemById(itemId);
        if (item) {
            total += item.price;
        }
    });
    return total;
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

const ids = prompt(
    "enter numbers separated by commas for the ids of the items you want to add to your cart",
    "1, 3, 5"
);
// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

idArr.forEach((id) => cart.push(parseInt(id)));
console.log(`The names of all the items are: `);
logItemNames();
const itemId = prompt("enter the id of an item you are trying to find", "1");
console.log(
    `The item with id ${itemId} is  ${JSON.stringify(
        findItemById(+itemId),
        null,
        2
    )}`
);
console.log(
    "We can map over an array and return a new array with the names capitalized like so: ",
    capitalizeNames()
);
console.log(
    "The total inventory of all grocery items is: ",
    calculateTotalInventory()
);
console.log(
    "The total price of all items in inventory is: ",
    calculateAllInventoryPrice()
);

const itemToFind = prompt(
    "Enter the name of an item to find the price of",
    "apple"
);
console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

const categoryId = prompt(
    "Enter a number between 1-4 to filter only items with that categoryId",
    2
);
console.log(
    `The items in category ${categoryId} are: `,
    filterItemsByCategoryId(+categoryId)
);

console.log("Cart items: ");
logCartItems();

console.log(
    `The total price of the items in your cart is: `,
    calculateTotalCartPrice()
);
