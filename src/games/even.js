import playGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const maxRandomNumber = 100;
const minRandomNumber = 1;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomIntInclusive(minRandomNumber, maxRandomNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(
  gameDescription,
  generateGameData,
);
