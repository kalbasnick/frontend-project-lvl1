import readlineSync from 'readline-sync';
import { getRandomNum, userName, getRandomItem } from '../index.js';

const getRandomProgression = () => {
  const startNum = getRandomNum(1, 90);
  const progression = [startNum];
  const step = 2;

  for (let nextNum = startNum + step; nextNum < (startNum + (step * 10)); nextNum += step) {
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
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    }
    if (Number(answer) !== correctAnswer) {
      return `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};

export default brainProgression;

console.log(`Hello ${userName}! \nWhat number is missing in the progression?`);
console.log(brainProgression());
