let stock = [
    {name: "Klēpjdators", category: "Elektronika", cost: 1200, inStock: 3},
    {name: "Dators", category: "Elektronika", cost: 1800, inStock: 1},
    {name: "Džinsi", category: "Apģērbi", cost: 35, inStock: 10}, 
    {name: "Krekls", category: "Apģērbi", cost: 15, inStock: 15},
];

let item;
let sum = 0;
for (let i = 0; i < stock.length; i++) {
    item = stock[i];
    sum += item.cost * item.inStock;

    if(item.category == "Elektronika") {
        console.log("Elektronikas prece:", item.name);
    }
};
console.log("===============================");
console.log("Kopējā summa:",sum, "EUR");