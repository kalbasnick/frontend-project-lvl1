import getRandomInt, { getRandomItem } from '../utils.js';

const generateProgressionForRound = (start, step, specificLength) => {
  const progression = [start];

  while (progression.length < specificLength) {
    progression.push(progression[progression.length - 1] + step);
  }

  const hiddenNum = getRandomItem(progression);
  progression[progression.indexOf(hiddenNum)] = '..';

  return [progression.join(' '), `${hiddenNum}`];
};

export default () => {
  const gameTask = 'What number is missing in the progression?';
  const [question, correctAnswer] = generateProgressionForRound(
    getRandomInt(1, 100),
    getRandomInt(2, 9),
    getRandomInt(5, 10),
  );

  return [gameTask, question, correctAnswer];
};
