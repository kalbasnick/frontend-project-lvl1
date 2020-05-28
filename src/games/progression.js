import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const progLength = 15;

const getGameProgression = (startNum, step = 2, indexOfHiddenElement = 0) => {
  const gameProgression = [];

  for (let i = 0; i < progLength; i += 1) {
    const element = startNum + i * step;
    gameProgression.push(i === indexOfHiddenElement ? ('..') : (element));
  }

  return gameProgression;
};

const generateRound = () => {
  const startNum = getRandomNum(1, 90);
  const step = getRandomNum(2, 9);
  const indexOfHiddenElement = getRandomNum(0, progLength - 1);
  const gameProgression = getGameProgression(startNum, step, indexOfHiddenElement);

  const question = gameProgression.join(' ');
  const correctAnswer = String(startNum + indexOfHiddenElement * step);

  return [question, correctAnswer];
};

const launchProgression = () => {
  runGame('What number is missing in the progression?', generateRound);
};

export default launchProgression;
