import { getRandomInt, askQuestion } from '../utils.js';

const getGcd = (num1, num2) => {
  if (num2 < 1) {
    return num1;
  }
  return String(getGcd(num2, num1 % num2));
};

const runRoundGcd = () => {
  const [num1, num2] = [getRandomInt(1, 100), getRandomInt(1, 100)];
  console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${num1} ${num2}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = getGcd(num1, num2);

  return [userAnswer, correctAnswer];
};

export default runRoundGcd;
