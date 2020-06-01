import runGame from '../index.js';
import { getRandomNum, getRandomItem } from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }

  throw new Error('Argument must contain "+", "-" or "*".');
};

const generateRound = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const operator = getRandomItem(['+', '-', '*']);
  const correctAnswer = String(calculate(randomNum1, randomNum2, operator));
  const question = `${randomNum1} ${operator} ${randomNum2}`;

  return [question, correctAnswer];
};

const gameObjective = 'What is the result of the expression?';

const launchCalc = () => {
  runGame(gameObjective, generateRound);
};

export default launchCalc;
