import { getRandomInt, getRandomItem, askQuestion } from '../utils.js';

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      throw new Error('Third argument should be "+", "-" or "*".');
  }
};

const runRoundCalc = () => {
  const [num1, num2] = [getRandomInt(1, 100), getRandomInt(1, 100)];
  const operator = getRandomItem(['+', '-', '*']);
  console.log(`What is the result of the expression?\nQuestion: ${num1} ${operator} ${num2}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = calculateExpression(num1, num2, operator);

  return [userAnswer, correctAnswer];
};

export default runRoundCalc;
