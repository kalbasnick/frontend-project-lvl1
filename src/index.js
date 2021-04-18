import askQuestion from './cli.js';

const launchGame = (gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const numberOfRounds = 3;
  let currentRound = 0;

  while (numberOfRounds > currentRound) {
    const roundGame = gameFunction();
    const [userAnswer, correctAnswer, result] = roundGame;
    if (result === 'win') {
      currentRound += 1;
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!'`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
