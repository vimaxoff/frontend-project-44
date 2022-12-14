import readlineSync from 'readline-sync';

const sayHallo = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hallo, ${name}!`);
};

export default sayHallo;
