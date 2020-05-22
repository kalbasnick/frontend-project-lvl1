import { question } from './index.js';

const welcome = () => {
  const name = question('Welcome to the Brain Games! \nMay I have your name?');
  console.log(`Hello, ${name}!`);
};

export default welcome;
