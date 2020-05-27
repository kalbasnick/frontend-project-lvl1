import runGame from '../index.js';
import { getRandomNum, getYesOrNo } from '../utils.js';

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }

  for (let divisor = Math.floor(num / 2); divisor > 1; divisor -= 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const getGamePrime = () => {
  const randomNum = getRandomNum(1, 1000);
  const isNumberPrime = isPrime(randomNum);
  const correctAnswer = getYesOrNo(isNumberPrime);
  const result = [randomNum, correctAnswer];

  return result;
};

const launchPrime = () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', getGamePrime);
};

export default launchPrime;
