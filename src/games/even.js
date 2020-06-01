import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const randomNum = getRandomNum(1, 100);
  const isNumberEven = isEven(randomNum);
  const correctAnswer = isNumberEven ? 'yes' : 'no';

  return [randomNum, correctAnswer];
};

const gameObjective = 'Answer "yes" if the number is even, otherwise answer "no".';

const launchEven = () => {
  runGame(gameObjective, generateRound);
};

export default launchEven;
