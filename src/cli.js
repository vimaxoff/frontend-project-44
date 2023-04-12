import readlineSync from 'readline-sync';

const sayHello = () => {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  const hello = `Hello, ${userName}!`;
  return console.log(hello);
};

export default sayHello;
