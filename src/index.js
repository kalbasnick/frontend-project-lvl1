import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGame = (gameObjective, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameObjective);

  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < numberOfRounds) {
    const [question, correctAnswer] = generateRound();

    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    numberOfCorrectAnswers += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
