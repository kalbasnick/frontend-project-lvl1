import {
  question,
  greetings,
  helloUser,
  objective,
  correct,
  wrong,
  congratulation,
} from '../index.js';
import { getRandomNum, getYesOrNo } from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const launchEven = () => {
  greetings();
  const userName = question('May I have your name?');
  helloUser(userName);
  objective('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum = getRandomNum(1, 100);
    const isNumberEven = isEven(randomNum);
    console.log('Question:', randomNum);
    const answer = question('Your answer:');

    if (isNumberEven ? (answer === 'yes') : (answer === 'no')) {
      correct();
      correctAnswers += 1;
    } else {
      wrong(answer, getYesOrNo(isNumberEven), userName);
      return;
    }
  }

  congratulation(userName);
};

export default launchEven;
