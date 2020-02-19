import intersection from 'lodash.intersection';
import getMainGameLogic from '../index.js';

import {
  generateQuestionsList,
  getRandomIntInclusive,
} from '../util.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 50;

  return getRandomIntInclusive(minRandomNumber, maxRandomNumber);
};

const getDividers = (number) => {
  const absoluteNumber = Math.abs(number);
  const dividers = [];

  for (let i = 1; i <= absoluteNumber; i += 1) {
    if (absoluteNumber % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
};

const getRandomQuestion = () => `${getRandomNumber()} ${getRandomNumber()}`;

const getAnswer = (question) => {
  const numbers = question.split(' ');
  const [firstNumber, secondNumber] = numbers;
  const firstNumberDivisors = getDividers(firstNumber);
  const seconNumberDivisors = getDividers(secondNumber);
  const commonDividers = intersection(firstNumberDivisors, seconNumberDivisors);

  return commonDividers[commonDividers.length - 1];
};

export default () => getMainGameLogic(
  gameRules,
  generateQuestionsList(getRandomQuestion, getAnswer),
);
