import {
  askQuestion,
  askObjective,
  showMessageCorrect,
  showMessageWrong,
} from '../index.js';
import { getRandomNum, getRandomItem } from '../utils.js';

const getMathExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }

  throw new Error('Argument must contain "+", "-" or "*".');
};

const launchCalc = () => {
  askObjective('What is the result of the expression?');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum1 = getRandomNum(1, 100);
    const randomNum2 = getRandomNum(1, 100);
    const operator = getRandomItem(['+', '-', '*']);
    const correctAnswer = String(getMathExpression(randomNum1, randomNum2, operator));

    console.log('Question:', `${randomNum1} ${operator} ${randomNum2}`);
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

export default launchCalc;
