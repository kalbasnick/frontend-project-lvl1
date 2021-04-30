import { getRandomInt, getRandomItem, askQuestion } from '../utils.js';

const makeProgressionForRound = (start, step, length) => {
  const progression = [start];

  while (progression.length < length) {
    const lastNum = progression.length - 1;
    progression.push(progression[lastNum] + step);
  }

  const hiddenNum = getRandomItem(progression);
  progression[progression.indexOf(hiddenNum)] = '..';

  return [progression.join(' '), `${hiddenNum}`];
};

const runRoundProgression = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(2, 9);
  const length = getRandomInt(5, 10);
  const roundTask = makeProgressionForRound(start, step, length);
  const [question, correctAnswer] = roundTask;
  console.log(`What number is missing in the progression?\nQuestion: ${question}`);
  const userAnswer = askQuestion('Your answer: ');

  return [userAnswer, correctAnswer];
};

export default runRoundProgression;
