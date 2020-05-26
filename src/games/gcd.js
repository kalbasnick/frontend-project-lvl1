import {
  askQuestion,
  askObjective,
  showMessageCorrect,
  showMessageWrong,
} from '../index.js';
import { getRandomNum } from '../utils.js';

const getGreatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  let r = 0;
  while (a !== 0) {
    r = b % a;
    b = a;
    a = r;
  }
  return b;
};

const launchGcd = () => {
  askObjective('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum1 = getRandomNum(1, 100);
    const randomNum2 = getRandomNum(1, 100);
    const correctAnswer = String(getGreatestCommonDivisor(randomNum1, randomNum2));

    console.log('Question:', `${randomNum1} ${randomNum2}`);
    const userAnswer = askQuestion('Your answer:');

    if (userAnswer === correctAnswer) {
      showMessageCorrect();
      correctAnswers += 1;
    } else {
      showMessageWrong(userAnswer, correctAnswer);
      return false;
    }
  }

  return true;
};

export default launchGcd;
