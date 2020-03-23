import playGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const maxRandomNumber = 100;
const minRandomNumber = -10;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (Math.sign(number) === -1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const question = getRandomIntInclusive(minRandomNumber, maxRandomNumber);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(
  gameDescription,
  generateGameData,
);
