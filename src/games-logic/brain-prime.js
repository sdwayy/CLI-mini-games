import {
  getMainGameLogic,
  generateQuestionsList,
  getRandomIntInclusive,
} from '../index.js';

const maxRandomNumber = 100;
const minRandomNumber = -10;

const isPrime = (number) => {
  if (Math.sign(number) === -1) {
    return false;
  }

  const dividersOfNumber = [];
  let answer = true;

  for (let i = 0; i <= number; i += 1) {
    if (dividersOfNumber.length > 2) {
      answer = false;
      break;
    }

    if (number % i === 0) {
      dividersOfNumber.push(i);
    }
  }

  return answer;
};

const getRandomQuestion = () => getRandomIntInclusive(minRandomNumber, maxRandomNumber);

const getAnswer = (number) => {
  const answer = (isPrime(number)) ? 'yes' : 'no';

  return answer;
};

export default () => getMainGameLogic(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestionsList(getRandomQuestion, getAnswer),
);
