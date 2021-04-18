import {
  getRandomInt, getRandomMathOperator, countExpression, generateResult,
} from '../src/utils.js';
import askQuestion from '../src/cli.js';

const calculate = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = getRandomMathOperator();
  console.log(`What is the result of the expression?\nQuestion: ${num1}${operator}${num2}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = countExpression(num1, num2, operator);

  return generateResult(userAnswer, correctAnswer);
};

export default calculate;
