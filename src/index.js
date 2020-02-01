import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name?');
const getUserGreeting = (userName) => console.log(`Hello, ${userName}`);

const getUserAccost = () => getUserGreeting(getUserName());


export {
  getUserAccost
}
