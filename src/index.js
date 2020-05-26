import readlineSync from 'readline-sync';

export const askQuestion = (message) => readlineSync.question(`${message} `);

export const askObjective = (whatToDo) => {
  console.log(whatToDo);
};

export const showMessageCorrect = () => {
  console.log('Correct!');
};

export const showMessageWrong = (givenAnswer, rightAnswer) => {
  console.log(`"${givenAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

const showMessageWin = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const showMessageLoss = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export const runGame = (gameFunc) => {
  welcome();
  const userName = askQuestion('May I have your name?');
  sayHello(userName);

  if (gameFunc()) {
    return showMessageWin(userName);
  }
  return showMessageLoss(userName);
};
