import readlineSync from 'readline-sync';
import { getRandomNum, userName } from '../index.js';

const isPrime = (num) => {
  let divisor = Math.floor(num / 2);
  for (; divisor > 1; divisor -= 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const brainPrime = () => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum = getRandomNum(1, 1000);

    console.log('Question:', randomNum);
    const answer = readlineSync.question('Your answer: ');

    if (isPrime(randomNum) === true) {
      if (answer === 'yes') {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        return `"${answer}" is wrong answer ;(. Correct answer was "yes". \nLet's try again, ${userName}!`;
      }
    }
    if (isPrime(randomNum) === false) {
      if (answer === 'no') {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        return `"${answer}" is wrong answer ;(. Correct answer was "no". \nLet's try again, ${userName}!`;
      }
    }
  }

  return `Congratulations, ${userName}!`;
};

export default brainPrime;

console.log(`Hello ${userName}! \nAnswer "yes" if given number is prime. Otherwise answer "no".`);
console.log(brainPrime());
