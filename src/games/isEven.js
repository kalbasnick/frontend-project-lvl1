import { getRandomInt, askQuestion } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const runRoundIsEven = () => {
  const num = getRandomInt(1, 100);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${num}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [userAnswer, correctAnswer];
};

export default runRoundIsEven;
