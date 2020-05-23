import {
  question,
  greetings,
  helloUser,
  objective,
  correct,
  wrong,
  congratulation,
} from '../index.js';
import { getRandomNum } from '../utils.js';

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const minNum = Math.min(num1, num2);
  const maxNum = Math.max(num1, num2);

  for (let divisor = minNum; divisor >= 0; divisor -= 1) {
    if (minNum % divisor === 0 && maxNum % divisor === 0) {
      return divisor;
    }
  }
  return null;
};

const launchGcd = () => {
  greetings();
  const userName = question('May I have your name?');
  helloUser(userName);
  objective('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum1 = getRandomNum(1, 100);
    const randomNum2 = getRandomNum(1, 100);
    const correctAnswer = getGreatestCommonDivisor(randomNum1, randomNum2);

    console.log('Question:', `${randomNum1} ${randomNum2}`);
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

export default launchGcd;
