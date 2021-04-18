import { getRandomInt } from '../src/utils.js';
import askQuestion from '../src/cli.js';

const isEven = () => {
  const num = getRandomInt(1, 100);
  console.log(`Question: ${num}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
  const result = [userAnswer, correctAnswer];
  result.push(userAnswer === correctAnswer ? 'win' : 'defeat');

  return result;
};

export default isEven;
