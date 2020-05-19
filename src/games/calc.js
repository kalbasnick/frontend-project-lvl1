import readlineSync from 'readline-sync';
import { getRandomNum, userName, getRandomItem } from '../index.js';

const randomOperation = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }

  return undefined;
};

const calc = () => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum1 = getRandomNum(1, 100);
    const randomNum2 = getRandomNum(1, 100);
    const operator = getRandomItem(['+', '-', '*']);
    const correctAnswer = randomOperation(randomNum1, randomNum2, operator);

    console.log('Question:', `${randomNum1} ${operator} ${randomNum2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    }
    if (Number(answer) !== correctAnswer) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};

export default calc;
