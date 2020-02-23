import getMainGameLogic from '../index.js';

import {
  getRandomIntInclusive,
  getNumberDividers,
} from '../util.js';

const maxRandomNumber = 100;
const minRandomNumber = -10;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (Math.sign(number) === -1) {
    return false;
  }

  let answer = true;
  const dividersOfNumber = getNumberDividers(number);

  if (dividersOfNumber.length > 2) {
    answer = false;
  }

  return answer;
};

const generateGameData = () => {
  const question = getRandomIntInclusive(minRandomNumber, maxRandomNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => getMainGameLogic(
  gameDescription,
  generateGameData,
);
