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
  const question = getRandomNum(1, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const gameObjective = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchPrime = () => {
  runGame(gameObjective, generateRound);
};

export default launchPrime;
