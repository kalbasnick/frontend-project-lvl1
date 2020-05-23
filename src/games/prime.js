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

const isPrime = (num) => {
  let divisor = Math.floor(num / 2);
  for (; divisor > 1; divisor -= 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

const launchPrime = () => {
  greetings();
  const userName = question('May I have your name?');
  helloUser(userName);
  objective('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum = getRandomNum(1, 1000);
    const isNumberPrime = isPrime(randomNum);

    console.log('Question:', randomNum);
    const answer = question('Your answer:');

    if (isNumberPrime ? (answer === 'yes') : (answer === 'no')) {
      correct();
      correctAnswers += 1;
    } else {
      wrong(answer, getYesOrNo(isNumberPrime), userName);
      return;
    }
  }

  congratulation(userName);
};

export default launchPrime;
