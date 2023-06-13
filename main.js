// Have the Main Menu and a Sides Menu

var mainMenu = [
    { dish: 'Pizza', price: 20 },
    { dish: 'Burger with bacon', price: 30 },
    { dish: 'Paella', price: 29 }
];


var accompanimentMenu = [
    { dish: 'Potato cake', price: 9 },
    { dish: 'Salad', price: 4 },
    { dish: 'Prawns', price: 8 }
];


// COUSIN

var breakfast = [
    { dish: 'eggs', price: 2 },
    { dish: 'bread', price: 2 },
];

var lunch = [
    { dish: 'pasta', price: 2 },
    { dish: 'meat', price: 3 },
    { dish: 'rice', price: 2 },
    { dish: 'soup', price: 2 },
];


var dinner = [
    { dish: 'pasta', price: 4 },
    { dish: 'meat', price: 5 },
    { dish: 'rice', price: 3 },
    { dish: 'soup', price: 3 },
];



// FOR MAINMENU & ACCOMPANIMENTMENU;

// You get an entree and two side options at regular cost.

function regularMenu() {
    var menu1 = mainMenu[0].dish + ' ' + accompanimentMenu[0].dish + ' ' + accompanimentMenu[1].dish;
    var price1 = mainMenu[0].price + accompanimentMenu[0].price + accompanimentMenu[1].price;
    return `It is a big promo  ${menu1}  just for ${price1}€`;
};

console.log(regularMenu())


// - show them the whole menu (print)

console.log(mainMenu);
console.log(accompanimentMenu);


// - A user selects an entree.
var userMainDish = mainMenu[2].dish;
console.log(`i Wants for me ${userMainDish} with a little by ${accompanimentMenu[1].dish}`)


// Waitress makes a comment based on their selection 

var waitressComment = `We have different dishes I would recommend ${userMainDish} with a little of ${accompanimentMenu[1].dish}.`
console.log(waitressComment)

// TELL THE PRICE


for (var i = 0; i < mainMenu.length; i++) {
    var dish = mainMenu[i].dish;
    var price = mainMenu[i].price;
    console.log(dish + '' + price + '€')
}

for (var i = 0; i < accompanimentMenu.length; i++) {
    var dish = accompanimentMenu[i].dish;
    var price = accompanimentMenu[i].price;
    console.log(dish + ' ' + price + '€')
}


// - repeat the previous options for the side options (comment and price)

console.log(Object.values(mainMenu))



// FOR COUSIN

function mixMenu(breakfast, lunch, dinner) {

    for (var i = 0; i < breakfast.length; i++) {
        var dish = breakfast[i].dish;
        var price = breakfast[i].price;
        console.log('We have' + ' ' + dish + ' for ' + price + '€')
    }


    for (var i = 0; i < lunch.length; i++) {
        var dish = lunch[i].dish;
        var price = lunch[i].price;
        console.log('We have' + ' ' + dish + ' for ' + price + '€')
    }




    for (var i = 0; i < dinner.length; i++) {
        var dish = dinner[i].dish;
        var price = dinner[i].price;
        console.log('We have' + ' ' + dish + ' for ' + price + '€')
    }
}
mixMenu(breakfast, lunch, dinner)


function comboMenu(dinner, breakfast, lunch) {
    var percentaje = 10;

    var todayMenu = dinner[0].price + breakfast[1].price + lunch[2].price;
    console.log(todayMenu)
    var discount = todayMenu * (percentaje / 100);

    var total = discount - todayMenu;

    return total;
}

console.log(comboMenu(dinner, breakfast, lunch))