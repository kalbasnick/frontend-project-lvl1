import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const progLength = 15;

const generateRound = () => {
  const startNum = getRandomNum(1, 90);
  const randomProgression = [startNum];
  const step = getRandomNum(2, 9);
  const indexOfHiddenElement = getRandomNum(0, progLength - 1);

  for (let nextNum = startNum + step; nextNum < (startNum + (step * progLength)); nextNum += step) {
    randomProgression.push(nextNum);
  }

  const correctAnswer = randomProgression[indexOfHiddenElement];
  randomProgression[indexOfHiddenElement] = '..';

  return [randomProgression.join(' '), String(correctAnswer)];
};

const launchProgression = () => {
  runGame('What number is missing in the progression?', generateRound);
};

export default launchProgression;
