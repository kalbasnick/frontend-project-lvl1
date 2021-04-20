import { getRandomInt, findGcd, generateResult } from '../src/utils.js';
import askQuestion from '../src/cli.js';

const runRoundGcd = () => {
  const [num1, num2] = [getRandomInt(1, 100), getRandomInt(1, 100)];
  console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = findGcd(num1, num2);

  return generateResult(userAnswer, correctAnswer);
};

export default runRoundGcd;
