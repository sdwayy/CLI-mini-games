import {
  getMainGameLogic,
  generateQuestionsList,
  getRandomNumber,
} from '../index.js';

const maxRandomNumber = 10;
const progressionLength = 10;

const getRandomQuestion = () => {
  const randomProgressionStart = getRandomNumber(maxRandomNumber);
  const randomProgressionDifference = getRandomNumber(maxRandomNumber) + 1;
  const randomProgression = [randomProgressionStart];

  for (let i = 0; i < progressionLength; i += 1) {
    randomProgression.push(randomProgression[i] + randomProgressionDifference);
  }

  randomProgression[getRandomNumber(randomProgression.length)] = '..';

  return randomProgression.join(' ');
};

const getAnswer = (question) => {
  const arrayOfQuestion = question.split(' ');
  const unknownNumberIndex = arrayOfQuestion.findIndex((item) => item === '..');

  const lastItemIndex = arrayOfQuestion.length - 1;
  const secondArrayItemToNumber = Number(arrayOfQuestion[1]);
  const thirdArrayItemToNumber = Number(arrayOfQuestion[2]);
  const previousItemToNumber = Number(arrayOfQuestion[unknownNumberIndex - 1]);
  const nextItemToNumber = Number(arrayOfQuestion[unknownNumberIndex + 1]);

  let differenceOfNumbers = 0;

  if (unknownNumberIndex === 0 || unknownNumberIndex === lastItemIndex) {
    differenceOfNumbers = thirdArrayItemToNumber - secondArrayItemToNumber;
  } else {
    differenceOfNumbers = (nextItemToNumber - previousItemToNumber) / 2;
  }

  if (unknownNumberIndex === 0) {
    return String(secondArrayItemToNumber - differenceOfNumbers);
  }

  return String(previousItemToNumber + differenceOfNumbers);
};

export default () => getMainGameLogic(
  'What number is missing in the progression?.',
  generateQuestionsList(getRandomQuestion, getAnswer),
);
