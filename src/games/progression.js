import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const progLength = 15;

const getGameProgression = () => {
  const startNum = getRandomNum(1, 90);
  const randomProgression = [startNum];
  const step = getRandomNum(2, 9);

  for (let nextNum = startNum + step; nextNum < (startNum + (step * progLength)); nextNum += step) {
    randomProgression.push(nextNum);
  }

  const askedProgression = randomProgression;
  const indexOfHiddenElement = getRandomNum(0, progLength - 1);
  const correctAnswer = randomProgression[indexOfHiddenElement];
  askedProgression[indexOfHiddenElement] = '..';
  const result = [askedProgression.join(' '), correctAnswer];

  return result;
};

const launchProgression = () => {
  runGame('What number is missing in the progression?', getGameProgression);
};

export default launchProgression;
