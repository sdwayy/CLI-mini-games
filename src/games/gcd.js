import intersection from 'lodash.intersection';
import playGame from '../index.js';

import {
  getRandomIntInclusive,
  getNumberDividers,
} from '../util.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 50;

  return getRandomIntInclusive(minRandomNumber, maxRandomNumber);
};

const getAnswer = (question) => {
  const numbers = question.split(' ');
  const [firstNumber, secondNumber] = numbers;
  const firstNumberDivisors = getNumberDividers(firstNumber);
  const seconNumberDivisors = getNumberDividers(secondNumber);
  const commonDividers = intersection(firstNumberDivisors, seconNumberDivisors);

  return String(commonDividers[commonDividers.length - 1]);
};

const generateGameData = () => {
  const question = `${getRandomNumber()} ${getRandomNumber()}`;
  const answer = getAnswer(question);

  return [question, answer];
};

export default () => playGame(
  gameDescription,
  generateGameData,
);
