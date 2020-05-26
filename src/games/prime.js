import {
  askQuestion,
  askObjective,
  showMessageCorrect,
  showMessageWrong,
} from '../index.js';
import { getRandomNum, getYesOrNo } from '../utils.js';

const isPrime = (num) => {
  if (num < 1) {
    return false;
  }

  let divisor = Math.floor(num / 2);
  for (; divisor > 1; divisor -= 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const launchPrime = () => {
  askObjective('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum = getRandomNum(1, 1000);
    const isNumberPrime = isPrime(randomNum);
    const correctAnswer = getYesOrNo(isNumberPrime);

    console.log('Question:', randomNum);
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

export default launchPrime;
