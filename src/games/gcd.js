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
  const question = `${randomNum1} ${randomNum2}`;

  return [question, correctAnswer];
};

const gameObjective = 'Find the greatest common divisor of given numbers.';

const launchGcd = () => {
  runGame(gameObjective, generateRound);
};

export default launchGcd;
