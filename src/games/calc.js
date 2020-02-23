import getMainGameLogic from '../index.js';
import { getRandomNumber } from '../util.js';

const maxRandomNumber = 50;
const gameDescription = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const getRandomQuestion = () => {
  const a = getRandomNumber(maxRandomNumber);
  const b = getRandomNumber(maxRandomNumber);
  const randomOperator = operators[getRandomNumber(operators.length)];

  return `${a} ${randomOperator} ${b}`;
};

const getAnswer = (expression) => {
  const expressionElements = expression.split(' ');
  const [firstOperand, operator, secondOperand] = expressionElements;

  let decision = '';

  switch (operator) {
    case '-':
      decision = String(+firstOperand - +secondOperand);
      break;
    case '*':
      decision = String(+firstOperand * +secondOperand);
      break;
    case '+':
      decision = String(+firstOperand + +secondOperand);
      break;
    default:
      return null;
  }

  return decision;
};

const generateGameData = () => {
  const question = getRandomQuestion();
  const answer = getAnswer(question);

  return [question, answer];
};

export default () => getMainGameLogic(
  gameDescription,
  generateGameData,
);
