import { getRandomNum, question, greetings } from '../index.js';

greetings();
const userName = question('May I have your name?');
console.log(`Hello, ${userName}! \nAnswer "yes" if the number is even, otherwise answer "no".`);

const isEven = (num) => (num % 2 === 0);

const brainEven = () => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNum = getRandomNum(1, 100);
    const evenNumber = isEven(randomNum);
    console.log('Question:', randomNum);
    const answer = question('Your answer:');

    if (evenNumber) {
      if (answer === 'yes') {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes". \nLet's try again, ${userName}!`);
        return;
      }
    }
    if (!evenNumber) {
      if (answer === 'no') {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "no". \nLet's try again, ${userName}!`);
        return;
      }
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
