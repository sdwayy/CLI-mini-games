import playGame from '../index.js';
import { getRandomIntInclusive } from '../util.js';

const maxRandomNumber = 10;
const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?.';

const getProgression = (length, start, difference) => {
  const randomProgression = [];

  for (let i = 0; i < length; i += 1) {
    if (i === 0) {
      randomProgression.push(start);
    } else {
      randomProgression.push(randomProgression[i - 1] + difference);
    }
  }

  return randomProgression;
};

const getQuestion = (progression, unknownElementIndex) => {
  const progressionCopy = progression.slice();

  progressionCopy[unknownElementIndex] = '..';

  return progressionCopy.join(' ');
};

const generateGameData = () => {
  const progressionStart = getRandomIntInclusive(0, maxRandomNumber);
  const progressionDifference = getRandomIntInclusive(1, maxRandomNumber);
  const progression = getProgression(
    progressionLength,
    progressionStart,
    progressionDifference,
  );
  const unknownElementIndex = getRandomIntInclusive(0, progression.length - 1);
  const question = getQuestion(progression, unknownElementIndex);
  const answer = String(progressionStart + progressionDifference * unknownElementIndex);

  return [question, answer];
};

export default () => playGame(
  gameDescription,
  generateGameData,
);
