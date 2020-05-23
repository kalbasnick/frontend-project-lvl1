import readlineSync from 'readline-sync';

export const question = (message) => readlineSync.question(`${message} `);

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const helloUser = (username) => {
  console.log(`Hello, ${username}!`);
};

export const objective = (whatToDo) => {
  console.log(whatToDo);
};

export const correct = () => {
  console.log('Correct!');
};

export const wrong = (userAnswer, rightAnswer, username) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${username}!`);
};

export const congratulation = (username) => {
  console.log(`Congratulations, ${username}!`);
};
