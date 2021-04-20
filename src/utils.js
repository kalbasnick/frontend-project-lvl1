export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomMathOperator = () => {
  const operators = ['+', '-', '*'];

  return operators[getRandomInt(0, 2)];
};

export const countExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      throw new Error('Third argument should be "+", "-" or "*".');
  }
};

export const generateResult = (userAnswer, correctAnswer) => {
  const result = [userAnswer, correctAnswer];
  result.push(userAnswer === correctAnswer ? 'win' : 'defeat');

  return result;
};

export const findGcd = (num1, num2) => {
  if (num2 < 1) {
    return num1;
  }
  return String(findGcd(num2, num1 % num2));
};
