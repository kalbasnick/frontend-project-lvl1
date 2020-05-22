import {
  getRandomNum,
  question,
  getRandomItem,
  greetings,
} from '../index.js';

greetings();
const userName = question('May I have your name?');
console.log(`Hello, ${userName}! \nWhat number is missing in the progression?`);

const getRandomProgression = () => {
  const startNum = getRandomNum(1, 90);
  const progression = [startNum];
  const step = 2;
  const progLength = 10;

  for (let nextNum = startNum + step; nextNum < (startNum + (step * progLength)); nextNum += step) {
    progression.push(nextNum);
  }

  return progression;
};

const brainProgression = () => {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomProgression = getRandomProgression();
    const hiddenElemet = getRandomItem(randomProgression);
    const indexOfHiddenElement = randomProgression.indexOf(hiddenElemet);
    const correctAnswer = randomProgression[indexOfHiddenElement];
    const questionProgression = randomProgression;
    questionProgression[indexOfHiddenElement] = '..';

    console.log('Question:', questionProgression.join(' '));
    const answer = question('Your answer:');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    }
    if (Number(answer) !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainProgression;
