import getRandomInt, { getRandomItem } from '../utils.js';

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Third argument should be "+", "-" or "*".');
  }
};

export default () => {
  const gameTask = 'What is the result of the expression?';
  const [num1, num2] = [getRandomInt(1, 100), getRandomInt(1, 100)];
  const operator = getRandomItem(['+', '-', '*']);
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculateExpression(num1, num2, operator));

  return [gameTask, question, correctAnswer];
};
