import readlineSync from 'readline-sync';

const evenRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const winnerCongratulation = (userName) => console.log(`Congratulations, ${userName}!`);
const makeQuestion = (str) => readlineSync.question(`Question: ${str}\nYour answer: `);
const wrongAnswer = (answer, wrightAnswer, userName) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${wrightAnswer}'.\nLet's try again, ${userName}!`);
const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export {
  evenRules, winnerCongratulation, makeQuestion, wrongAnswer, greet,
};
