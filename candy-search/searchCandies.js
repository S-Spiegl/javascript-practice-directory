const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

    const searchCandies = (start, maxPrice) => candies 
        .filter(candy => candy.price < maxPrice)
        .filter(candy => candy.name.startsWith(start[0].toUpperCase()+start.substring(1)))
        .map(({name}) => name);

        // could do with a method that capitalizes the first
        // letter of every word, like in ruby, then could run toUpperCase and then 
        // Capitalize to guard against weird inputs...

module.exports = searchCandies;