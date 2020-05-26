import {
  askQuestion,
  askObjective,
  showMessageCorrect,
  showMessageWrong,
} from '../index.js';
import { getRandomNum, getYesOrNo } from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const launchEven = () => {
  askObjective('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum = getRandomNum(1, 100);
    const isNumberEven = isEven(randomNum);
    const correctAnswer = getYesOrNo(isNumberEven);

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

export default launchEven;
