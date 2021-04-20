import { generateResult, getRandomInt, getRandomItem } from '../src/utils.js';
import askQuestion from '../src/cli.js';

const makeProgression = (start, step, length) => {
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
  const roundTask = makeProgression(getRandomInt(1, 100), getRandomInt(2, 9), getRandomInt(5, 10));
  const [question, correctAnswer] = roundTask;
  console.log(`What number is missing in the progression?\nQuestion: ${question}`);
  const userAnswer = askQuestion('Your answer: ');

  return generateResult(userAnswer, correctAnswer);
};

export default runRoundProgression;
