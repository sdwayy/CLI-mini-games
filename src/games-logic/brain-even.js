import {
  getMainGameLogic,
  generateQuestionsList,
  getRandomNumber,
} from '../index.js';

const maxRandomNumber = 100;
const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => {
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};

export default () => getMainGameLogic(
  'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestionsList(() => getRandomNumber(maxRandomNumber), getCorrectAnswer),
);
