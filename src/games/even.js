import getMainGameLogic from '../index.js';

import {
  generateQuestionsList,
  getRandomNumber,
} from '../util.js';

const maxRandomNumber = 100;
const isEven = (number) => number % 2 === 0;

const getQuestion = () => getRandomNumber(maxRandomNumber);

const getAnswer = (number) => {
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => getMainGameLogic(
  'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestionsList(getQuestion, getAnswer),
);
