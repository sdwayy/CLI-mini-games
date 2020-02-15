import maxGameAttempts from './constans.js';

// Максимум и минимум включаются
const getRandomIntInclusive = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

// Возвращаемое значение не более (и не равно) max
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

//  Создает список вопросов со структурой [вопрос, ответ]
const generateQuestionsList = (getRandomQustion, getAnswer) => {
  const questions = [];

  for (let i = 0; i < maxGameAttempts; i += 1) {
    const question = getRandomQustion();
    const answer = getAnswer(question);

    questions.push([question, answer]);
  }

  return questions;
};

export {
  getRandomIntInclusive,
  getRandomNumber,
  generateQuestionsList,
};
