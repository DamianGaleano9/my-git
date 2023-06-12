// Have the Main Menu and a Sides Menu

var mainMenu = [
    {dish: 'Pizza', price: 20},
    {dish: 'Burger with bacon', price: 30},
    {dish: 'Paella', price: 29}
];


var accompanimentMenu = [
    {dish: 'Potato cake', price: 9},
    {dish:  'Salad', price: 4},
    {dish: 'Prawns', price: 8}
]


console.log(mainMenu);

for(var i= 0; i < mainMenu.length; i++) {
    var dish = mainMenu[i].dish;
    var price = mainMenu[i].price;
    console.log(dish + '' + price + ' €')
}

for(var i= 0; i < accompanimentMenu.length; i++) {
    var dish = accompanimentMenu[i].dish;
    var price = accompanimentMenu[i].price;
    console.log(dish + ' ' + price + ' -€')
}


function regularMenu() {
    var menu1 = mainMenu[0].dish +' ' + accompanimentMenu[0].dish + ' ' + accompanimentMenu[1].dish;
    var price1 = mainMenu[0].price + accompanimentMenu[0].price + accompanimentMenu[1].price;
    return `It is a big promo ${menu1}  just for ${price1}€`;
}


// - A user selects an entree.
var userMainDish = mainMenu[2].dish;
console.log(userMainDish)



var waitressComment = 

console.log(regularMenu())


console.log(getMainMenuAndAccompaniment())


