import {
  askQuestion,
  askObjective,
  showMessageCorrect,
  showMessageWrong,
} from '../index.js';
import { getRandomNum, getRandomItem } from '../utils.js';

const progLength = 15;

const getRandomProgression = () => {
  const startNum = getRandomNum(1, 90);
  const progression = [startNum];
  const step = getRandomNum(2, 9);

  for (let nextNum = startNum + step; nextNum < (startNum + (step * progLength)); nextNum += step) {
    progression.push(nextNum);
  }

  return progression;
};

const launchProgression = () => {
  askObjective('What number is missing in the progression?');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomProgression = getRandomProgression();
    const indexOfHiddenElement = randomProgression.indexOf(getRandomItem(randomProgression));
    const correctAnswer = randomProgression[indexOfHiddenElement];
    const questionProgression = randomProgression;
    questionProgression[indexOfHiddenElement] = '..';

    console.log('Question:', questionProgression.join(' '));
    const userAnswer = askQuestion('Your answer:');

    if (Number(userAnswer) === correctAnswer) {
      showMessageCorrect();
      correctAnswers += 1;
    } else {
      showMessageWrong(userAnswer, correctAnswer);
      return false;
    }
  }

  return true;
};

export default launchProgression;
