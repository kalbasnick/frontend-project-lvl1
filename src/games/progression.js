import runGame from '../index.js';
import { getRandomNum } from '../utils.js';

const progLength = 15;

const getQuestion = (startNum, step = 2, indexOfHiddenElement = 0) => {
  const gameProgression = [];

  for (let i = 0; i < progLength; i += 1) {
    const element = startNum + i * step;
    gameProgression.push(i === indexOfHiddenElement ? ('..') : (element));
  }

  return gameProgression.join(' ');
};

const generateRound = () => {
  const startNum = getRandomNum(1, 90);
  const step = getRandomNum(2, 9);
  const indexOfHiddenElement = getRandomNum(0, progLength - 1);

  const question = getQuestion(startNum, step, indexOfHiddenElement);
  const correctAnswer = String(startNum + indexOfHiddenElement * step);

  return [question, correctAnswer];
};

const gameObjective = 'What number is missing in the progression?';

const launchProgression = () => {
  runGame(gameObjective, generateRound);
};

export default launchProgression;
