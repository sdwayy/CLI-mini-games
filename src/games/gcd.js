import playGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => {
  const minRandomNumber = 1;
  const maxRandomNumber = 50;

  return getRandomIntInclusive(minRandomNumber, maxRandomNumber);
};

const gcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return gcd(secondNumber, firstNumber % secondNumber);
};

const generateGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));

  return [question, answer];
};

export default () => playGame(
  gameDescription,
  generateGameData,
);
