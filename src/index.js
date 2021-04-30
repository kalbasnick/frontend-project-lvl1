import { askQuestion } from './utils.js';

export const roundsCount = 3;

const launchGame = (runRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let currentRound = 0;

  while (roundsCount > currentRound) {
    const roundGame = runRound();
    const [userAnswer, correctAnswer] = roundGame;

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!'`);
      return;
    }

    currentRound += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
