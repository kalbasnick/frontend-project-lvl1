import getRandomInt from '../utils.js';

const getGcd = (num1, num2) => {
  if (num2 < 1) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

export default () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';
  const [num1, num2] = [getRandomInt(1, 100), getRandomInt(1, 100)];
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [gameTask, question, correctAnswer];
};
