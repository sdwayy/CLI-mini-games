import getMainGameLogic from '../index.js';
import { getRandomNumber } from '../util.js';

const maxRandomNumber = 10;
const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?.';

const getRandomProgression = () => {
  const randomProgressionStart = getRandomNumber(maxRandomNumber);
  const randomProgressionDifference = getRandomNumber(maxRandomNumber) + 1;
  const randomProgression = [randomProgressionStart];

  for (let i = 0; i < progressionLength; i += 1) {
    randomProgression.push(randomProgression[i] + randomProgressionDifference);
  }

  return randomProgression;
};

const getValueOfProgressionElement = (progression, elementIndex) => {
  const diff = progression[1] - progression[0];

  return String(+progression[0] + diff * elementIndex);
};

const getQuestion = (progression) => {
  const progressionCopy = progression.slice();

  progressionCopy[getRandomNumber(progressionCopy.length)] = '..';

  return progressionCopy.join(' ');
};

const generateGameData = () => {
  const progression = getRandomProgression();
  const question = getQuestion(progression);
  const desiredElementIndex = question.split(' ').findIndex((item) => item === '..');
  const answer = getValueOfProgressionElement(progression, desiredElementIndex);

  return [question, answer];
};

export default () => getMainGameLogic(
  gameDescription,
  generateGameData,
);
