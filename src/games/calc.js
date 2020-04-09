import playGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const maxRandomNumber = 50;
const gameDescription = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const calculate = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '+':
      return firstOperand + secondOperand;
    default:
      return null;
  }
};

const generateGameData = () => {
  const firstOperand = getRandomIntInclusive(1, maxRandomNumber);
  const secondOperand = getRandomIntInclusive(1, maxRandomNumber);
  const operator = operators[getRandomIntInclusive(0, operators.length - 1)];
  const calculatedValue = calculate(firstOperand, operator, secondOperand);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(calculatedValue);

  return [question, answer];
};

export default () => playGame(
  gameDescription,
  generateGameData,
);
