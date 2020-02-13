import {
  getMainGameLogic,
  generateQuestionsList,
  getRandomNumber,
} from '../index.js';

export default () => {
  const maxRandomNumber = 50;

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

  return getMainGameLogic(
    'What is the result of the expression?',
    generateQuestionsList(genarateOperation, getDecision),
  );
};
