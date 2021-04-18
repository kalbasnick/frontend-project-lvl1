export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomMathOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInt(0, 2)];
};

export const countExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Third argument should be "+", "-" or "*".');
  }
};

export const generateResult = (userAnswer, correctAnswer) => {
  const result = [userAnswer, correctAnswer];
  result.push(Number(userAnswer) === correctAnswer ? 'win' : 'defeat');

  return result;
};
