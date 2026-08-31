// Task 31: createCard Function

const createCard = (title, price = 0, ...tags) => ({
    title,
    price,
    tags,
    label: `${title} - ${price} EGP`
});

const card1 = createCard("Laptop", 15000, "electronics", "computer", "portable");
const card2 = createCard("Mouse", 250, "electronics", "accessories");

console.log(card1);
console.log(card2);
