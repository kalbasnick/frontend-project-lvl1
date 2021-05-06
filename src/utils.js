const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomItem = (items) => items[getRandomInt(0, items.length - 1)];

export default getRandomInt;
