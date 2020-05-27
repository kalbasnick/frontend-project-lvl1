import runGame from '../index.js';
import { getRandomNum, getYesOrNo } from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const getGameEven = () => {
  const randomNum = getRandomNum(1, 100);
  const isNumberEven = isEven(randomNum);
  const correctAnswer = getYesOrNo(isNumberEven);
  const result = [randomNum, correctAnswer];

  return result;
};

const launchEven = () => {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', getGameEven);
};

export default launchEven;
