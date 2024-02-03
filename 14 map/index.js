//  Map     ->     object that holds key-value pairs of any data type

let guitarStore = new Map([
    ["Epiphone", 300],
    ["Gibson", 1500],
    ["Fender", 1200],
    ["Ibanez", 1600],
    ["*strandberg.", 2000]
]);
console.log('--- THE GUITAR CENTRE ---');
// guitarStore.forEach((value, key) => console.log(`${ key } $${ value }`));

function addToStore(store, key, value) {
    store.set(key, value);
}

let shoppingCart = 0;

addToStore(guitarStore, "PRS", 1300);
guitarStore.delete('PRS');
guitarStore.forEach((value, key) => console.log(`${ key } $${ value }`));
console.log();
function addToCart(item, shop) {
    shoppingCart += shop.get(item);
    console.log(`Added ${ item } guitar to the cart.`);
}


addToCart('Ibanez', guitarStore);
addToCart('*strandberg.', guitarStore);

console.log(`\nTotal amount : $${ shoppingCart }`)

console.log(`\nHas Ibanez in stock? : ${ guitarStore.has('Ibanez') ? 'Yes!' : 'No. :(' }`)