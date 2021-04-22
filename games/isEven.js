import { getRandomInt, generateResult } from '../src/utils.js';
import askQuestion from '../src/cli.js';

const runRoundIsEven = () => {
  const num = getRandomInt(1, 100);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${num}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  return generateResult(userAnswer, correctAnswer);
};

export default runRoundIsEven;
