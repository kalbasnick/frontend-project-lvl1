import {
  question,
  greetings,
  helloUser,
  objective,
  correct,
  wrong,
  congratulation,
} from '../index.js';
import { getRandomNum, getRandomItem } from '../utils.js';

const getRandomProgression = () => {
  const startNum = getRandomNum(1, 90);
  const progression = [startNum];
  const step = 2;
  const progLength = 10;

  for (let nextNum = startNum + step; nextNum < (startNum + (step * progLength)); nextNum += step) {
    progression.push(nextNum);
  }

  return progression;
};

const launchProgression = () => {
  greetings();
  const userName = question('May I have your name?');
  helloUser(userName);
  objective('What number is missing in the progression?');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomProgression = getRandomProgression();
    const hiddenElement = getRandomItem(randomProgression);
    const indexOfHiddenElement = randomProgression.indexOf(hiddenElement);
    const correctAnswer = randomProgression[indexOfHiddenElement];
    const questionProgression = randomProgression;
    questionProgression[indexOfHiddenElement] = '..';

    console.log('Question:', questionProgression.join(' '));
    const answer = question('Your answer:');

    if (Number(answer) === correctAnswer) {
      correct();
      correctAnswers += 1;
    } else {
      wrong(answer, correctAnswer, userName);
      return;
    }
  }

  congratulation(userName);
};

export default launchProgression;
