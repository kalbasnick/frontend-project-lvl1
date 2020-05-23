import { question } from './index.js';

const launchWelcome = () => {
  const name = question('Welcome to the Brain Games! \nMay I have your name?');
  console.log(`Hello, ${name}!`);
};

export default launchWelcome;
