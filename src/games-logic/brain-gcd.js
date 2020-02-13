import intersection from 'lodash.intersection';

import {
  getMainGameLogic,
  generateQuestionsList,
  getRandomNumber,
} from '../index.js';


const getDividers = (number) => {
  const dividers = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
};

export default () => {
  const maxRandomNumber = 50;

  const getRandomQuestion = () => `${getRandomNumber(maxRandomNumber)} ${getRandomNumber(maxRandomNumber)}`;

  const getAnswer = (qustion) => {
    const numbers = qustion.split(' ');
    const firstNumber = Math.abs(numbers[0]);
    const secondNumber = Math.abs(numbers[1]);
    const firstNumberDivisors = getDividers(firstNumber);
    const seconNumberDivisors = getDividers(secondNumber);
    const commonDividers = intersection(firstNumberDivisors, seconNumberDivisors);

    return String(commonDividers[commonDividers.length - 1]);
  };

  return getMainGameLogic(
    'Find the greatest common divisor of given numbers.',
    generateQuestionsList(getRandomQuestion, getAnswer),
  );
};
