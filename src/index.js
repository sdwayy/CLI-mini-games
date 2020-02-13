import readlineSync from 'readline-sync';

const maxGameAttempts = 3;

// Возвращаемое значение не более (и не равно) max
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const generateQuestionsList = (getRandomQustion, getAnswer) => {
  const questions = [];

  for (let i = 0; i < maxGameAttempts; i += 1) {
    const question = getRandomQustion();
    const answer = getAnswer(question);

    questions.push([question, answer]);
  }

  return questions;
};

const getMainGameLogic = (gameRules, questions) => {
  const gameGreeting = 'Welcome to the Brain Games!';
  let userName = '';
  let userAnswer = '';

  const getUserGreeting = () => `Hello, ${userName}`;

  const getUserName = () => {
    userName = readlineSync.question('May I have your name? ');
    return userName;
  };

  const getUserAnswer = () => {
    userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
  };

  console.log(gameGreeting); // Brain Games приветствие
  getUserName(); // Узнаем имя пользователя и записываем его
  console.log(getUserGreeting()); // Приветствуем пользователя
  console.log(gameRules); // Показываем правила игры

  for (let i = 0; i <= maxGameAttempts; i += 1) {
    if (i === maxGameAttempts) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }

    const question = questions[i][0];
    const correctAnswer = questions[i][1];

    console.log(`Question: ${question}`); // Задаем вопрос
    getUserAnswer(); // Получаем ответ от пользователя и записываем его

    if (String(userAnswer).toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export {
  getMainGameLogic,
  generateQuestionsList,
  getRandomNumber,
};
