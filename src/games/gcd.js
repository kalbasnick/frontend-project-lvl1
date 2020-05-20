import { getRandomNum, question } from '../index.js';

const userName = question('Welcome to the Brain Games! \nMay I have your name?');
console.log(`Hello, ${userName}! \nFind the greatest common divisor of given numbers.`);

const greatestCommonDivisor = (num1, num2) => {
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

  return undefined;
};

const brainGcd = () => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum1 = getRandomNum(1, 100);
    const randomNum2 = getRandomNum(1, 100);
    const correctAnswer = greatestCommonDivisor(randomNum1, randomNum2);

    console.log('Question:', `${randomNum1} ${randomNum2}`);
    const answer = question('Your answer:');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    }
    if (Number(answer) !== correctAnswer) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};

export default brainGcd;
