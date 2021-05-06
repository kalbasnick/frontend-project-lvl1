import getRandomInt from '../utils.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const num = getRandomInt(1, 100);
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [gameTask, question, correctAnswer];
};
