import { getRandomInt, askQuestion } from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  let divisor = Math.floor(num / 2);

  while (divisor > 1) {
    if (num % divisor === 0) {
      return false;
    }
    divisor -= 1;
  }

  return true;
};

const runRoundIsPrime = () => {
  const question = getRandomInt(1, 100);
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${question}`);
  const userAnswer = askQuestion('Your answer: ');
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [userAnswer, correctAnswer];
};

export default runRoundIsPrime;
