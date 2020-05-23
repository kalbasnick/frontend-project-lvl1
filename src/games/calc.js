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

const getRandomOperation = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  return null;
};

const launchCalc = () => {
  greetings();
  const userName = question('May I have your name?');
  helloUser(userName);
  objective('What is the result of the expression?');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum1 = getRandomNum(1, 100);
    const randomNum2 = getRandomNum(1, 100);
    const operator = getRandomItem(['+', '-', '*']);
    const correctAnswer = getRandomOperation(randomNum1, randomNum2, operator);

    console.log('Question:', `${randomNum1} ${operator} ${randomNum2}`);
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

export default launchCalc;
