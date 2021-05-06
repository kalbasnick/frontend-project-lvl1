import getRandomInt from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let divisor = Math.floor(num / 2); divisor > 1; divisor -= 1) {
    if (num % divisor === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = `${getRandomInt(1, 100)}`;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [gameTask, question, correctAnswer];
};
