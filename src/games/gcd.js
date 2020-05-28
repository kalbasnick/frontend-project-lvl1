import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const getGreatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  let r = 0;
  while (a !== 0) {
    r = b % a;
    b = a;
    a = r;
  }
  return b;
};

const generateRound = () => {
  const randomNum1 = getRandomNum(1, 100);
  const randomNum2 = getRandomNum(1, 100);
  const correctAnswer = String(getGreatestCommonDivisor(randomNum1, randomNum2));

  return [`${randomNum1} ${randomNum2}`, correctAnswer];
};

const launchGcd = () => {
  runGame('Find the greatest common divisor of given numbers.', generateRound);
};

export default launchGcd;
