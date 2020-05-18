import readlineSync from 'readline-sync';

export const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');

export const getRandomNum = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + 1;
};

export const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
