import getMainGameLogic from '../index.js';

import {
  generateQuestionsList,
  getRandomNumber,
} from '../util.js';

const maxRandomNumber = 50;
const gameRules = 'What is the result of the expression?';

const genarateOperation = () => {
  const operators = ['*', '+', '-'];
  const a = getRandomNumber(maxRandomNumber);
  const b = getRandomNumber(maxRandomNumber);
  const randomOperator = operators[getRandomNumber(operators.length)];

  return `${a} ${randomOperator} ${b}`;
};

const getDecision = (stringExpression) => {
  const expressionElements = stringExpression.split(' ');
  const firstOperand = Number(expressionElements[0]);
  const operator = expressionElements[1];
  const secondOperand = Number(expressionElements[2]);

  let decision = '';

  switch (operator) {
    case '-':
      decision = String(firstOperand - secondOperand);
      break;
    case '*':
      decision = String(firstOperand * secondOperand);
      break;
    case '+':
      decision = String(firstOperand + secondOperand);
      break;
    default:
      decision = null;
  }

  return decision;
};

export default () => getMainGameLogic(
  gameRules,
  generateQuestionsList(genarateOperation, getDecision),
);
