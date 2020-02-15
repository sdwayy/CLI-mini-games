import intersection from 'lodash.intersection';
import getMainGameLogic from '../index.js';

import {
  generateQuestionsList,
  getRandomIntInclusive,
} from '../util.js';

const minRandomNumber = 1;
const maxRandomNumber = 50;

const getDividers = (number) => {
  const dividers = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
};

const getRandomQuestion = () => `${getRandomIntInclusive(minRandomNumber, maxRandomNumber)} ${getRandomIntInclusive(minRandomNumber, maxRandomNumber)}`;


const getAnswer = (qustion) => {
  const numbers = qustion.split(' ');
  const firstNumber = Math.abs(numbers[0]);
  const secondNumber = Math.abs(numbers[1]);
  const firstNumberDivisors = getDividers(firstNumber);
  const seconNumberDivisors = getDividers(secondNumber);
  const commonDividers = intersection(firstNumberDivisors, seconNumberDivisors);

  return String(commonDividers[commonDividers.length - 1]);
};

export default () => getMainGameLogic(
  'Find the greatest common divisor of given numbers.',
  generateQuestionsList(getRandomQuestion, getAnswer),
);
