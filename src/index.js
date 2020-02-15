import readlineSync from 'readline-sync';
import maxGameAttempts from './constans.js';

export default (gameDescription, questionsList) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameDescription);

  for (let i = 0; i < maxGameAttempts; i += 1) {
    const question = questionsList[i][0];
    const correctAnswer = questionsList[i][1];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (String(userAnswer).toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
