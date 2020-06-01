import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let divisor = Math.floor(num / 2); divisor > 1; divisor -= 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const randomNum = getRandomNum(1, 1000);
  const isNumberPrime = isPrime(randomNum);
  const correctAnswer = isNumberPrime ? 'yes' : 'no';

  return [randomNum, correctAnswer];
};

const gameObjective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchPrime = () => {
  runGame(gameObjective, generateRound);
};

export default launchPrime;
