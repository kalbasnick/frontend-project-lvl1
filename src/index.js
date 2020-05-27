import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGame = (gameObjective, gameFunc) => {
  const userName = readlineSync.question('Welcome to the Brain Games! \nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameObjective);

  let correctAnswers = 0;
  while (correctAnswers < numberOfRounds) {
    const gameForRound = gameFunc();
    const question = gameForRound[0];
    const correctAnswer = String(gameForRound[1]);

    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default runGame;
