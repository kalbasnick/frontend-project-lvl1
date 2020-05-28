import runGame from '../index.js';
import { getRandomNum, getRandomItem } from '../utils.js';

const getMathExpression = (num1, num2, operator) => {
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
  const correctAnswer = String(getMathExpression(randomNum1, randomNum2, operator));

  return [`${randomNum1} ${operator} ${randomNum2}`, correctAnswer];
};

const launchCalc = () => {
  runGame('What is the result of the expression?', generateRound);
};

export default launchCalc;
