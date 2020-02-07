import readlineSync from 'readline-sync';

const maxRandomNumber = 1000;
const userName = readlineSync.question('May I have your name?');
const isEven = (number) => number % 2 === 0;
const getRandomNumber = () => Math.floor(Math.random() * Math.floor(maxRandomNumber));

const getGameGreeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}`);
};

const brainEvenLogic = () => {
  const maxAttempts = 3;
  let currentAttempt = 1;

  while (currentAttempt <= maxAttempts + 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';

    if (currentAttempt === maxAttempts + 1) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      currentAttempt += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export {
  userName,
  isEven,
  brainEvenLogic,
  getGameGreeting,
};
