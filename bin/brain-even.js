#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hallo, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = () => {
  let i = 0;
  while (i < 3) {
    const randomNum = Math.round(Math.random() * (100 - 1) + 1);
    const answer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if (answer === 'yes' && randomNum % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (answer === 'yes' && randomNum % 2 !== 0) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    } else if (answer === 'no' && randomNum % 2 !== 0) {
      console.log('Correct!');
      i += 1;
    } else if (answer === 'no' && randomNum % 2 === 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    } else if ((answer !== 'no' || answer !== 'yes') && randomNum % 2 === 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    } else if ((answer !== 'no' || answer !== 'yes') && randomNum % 2 !== 0) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};
isEven();
