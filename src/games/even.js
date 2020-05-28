import runGame from '../index.js';
import { getRandomNum, getYesOrNo } from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const randomNum = getRandomNum(1, 100);
  const isNumberEven = isEven(randomNum);
  const correctAnswer = getYesOrNo(isNumberEven);

  return [randomNum, correctAnswer];
};

const launchEven = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
};

export default launchEven;
