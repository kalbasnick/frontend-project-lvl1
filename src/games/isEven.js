import readlineSync from 'readline-sync';
import { getRandomNum, userName } from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const brainEven = () => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum = getRandomNum(1, 100);
    console.log('Question:', randomNum);
    const answer = readlineSync.question('Your answer: ');

    if (isEven(randomNum) === true) {
      if (answer === 'yes') {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        return `"${answer}" is wrong answer ;(. Correct answer was "yes". \nLet's try again, ${userName}!`;
      }
    }
    if (isEven(randomNum) === false) {
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

export default brainEven;

console.log(`Hello ${userName}! \nAnswer "yes" if the number is even, otherwise answer "no".`);
console.log(brainEven());
