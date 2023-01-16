/*
import {
  calcRules, winnerCongratulation, makeQuestion, wrongAnswer, greet,
} from './sentenses.js';
import { randomNum, randomSign, calculator } from './calculations.js';
import engine from '../index.js';

const calculate = () => {
  const userName = greet();
  calcRules();

  let i = 0;
  while (i < 3) {
    const numberOne = randomNum();
    const numberTwo = randomNum();
    const sign = randomSign();
    const answer = makeQuestion(`${numberOne} ${sign} ${numberTwo}`);
    const correctAnswer = calculator(`${numberOne} ${sign} ${numberTwo}`);
    const wrightAnswer = answer === correctAnswer;

    if (wrightAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return wrongAnswer(answer, correctAnswer, userName);
    }
  }
  return winnerCongratulation(userName);
};

export default calculate;
*/
import { randomNum, randomSign, calculator } from './calculations.js';

const calcRules = 'What is the result of the expression?';

const calcData = () => {
  const numberOne = randomNum();
  const numberTwo = randomNum();
  const sign = randomSign();
  const question = `${numberOne} ${sign} ${numberTwo}`;
  const correctAnswer = calculator(question);
  return [question, correctAnswer];
};

export { calcRules, calcData };
