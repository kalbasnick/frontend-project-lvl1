import readlineSync from 'readline-sync';

const askQuestion = (question) => readlineSync.question(question);

export const roundsCount = 3;

const launchGame = (generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let round = 0; round < roundsCount; round += 1) {
    const [gameTask, question, correctAnswer] = generateRound();

    if (round === 0) {
      console.log(gameTask);
    }

    console.log(`Question: ${question}`);
    const userAnswer = askQuestion('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!'`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
