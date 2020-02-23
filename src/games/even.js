import getMainGameLogic from '../index.js';
import { getRandomNumber } from '../util.js';

const maxRandomNumber = 100;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomNumber(maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => getMainGameLogic(
  gameDescription,
  generateGameData,
);
