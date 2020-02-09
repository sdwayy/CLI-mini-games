import readlineSync from 'readline-sync';

// Возвращаемое значение не более (и не равно) max
const getRandomNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const maxRandomNumber = 100;
const maxGameAttempts = 3;

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

const getBrainEvenGameLogic = () => {
  const questions = [];
  const isEven = (number) => number % 2 === 0;

  //  Создаем массив вопросов и ответов
  for (let i = 0; i < maxGameAttempts; i += 1) {
    questions[i] = []; // Массив вопроса
    questions[i][0] = getRandomNumber(100); // Где первый элемент вопрос
    questions[i][1] = isEven(questions[i][0]) ? 'yes' : 'no'; // Второй - ответ
  }

  return getMainGameLogic(
    'Answer "yes" if the number is even, otherwise answer "no".',
    questions,
  );
};

const getCalcGameLogic = () => {
  const questions = [];

  const genarateOperation = () => {
    const operators = ['*', '+', '-'];
    const a = getRandomNumber(maxRandomNumber);
    const b = getRandomNumber(maxRandomNumber);
    const randomOperator = operators[getRandomNumber(operators.length)];

    return `${a} ${randomOperator} ${b}`;
  };

  const getDecision = (stringExpression) => {
    const expressionElements = stringExpression.split(' ');
    const firstOperand = Number(expressionElements[0]);
    const operator = expressionElements[1];
    const secondOperand = Number(expressionElements[2]);

    let decision = '';

    switch (operator) {
      case '-':
        decision = String(firstOperand - secondOperand);
        break;
      case '*':
        decision = String(firstOperand * secondOperand);
        break;
      case '+':
        decision = String(firstOperand + secondOperand);
        break;
      default:
        decision = null;
    }

    return decision;
  };

  for (let i = 0; i < maxGameAttempts; i += 1) {
    questions[i] = []; // Массив вопроса
    questions[i][0] = genarateOperation(); // Где первый элемент вопрос
    questions[i][1] = getDecision(questions[i][0]); // Второй - ответ
  }

  return getMainGameLogic(
    'What is the result of the expression?',
    questions,
  );
};

export {
  getBrainEvenGameLogic,
  getCalcGameLogic,
};
