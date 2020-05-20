import { question } from './index.js';

const userName = question('Welcome to the Brain Games! \nMay I have your name?');
console.log(`Hello, ${userName}!`);

export default userName;
