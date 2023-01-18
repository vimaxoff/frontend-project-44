import { randomNum, greatestCommonDevisor } from './calculations.js';

const gcdRules = 'Find the greatest common divisor of given numbers.';

const gcdData = () => {
  const numberOne = randomNum();
  const numberTwo = randomNum();
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = greatestCommonDevisor(numberOne, numberTwo);
  return [question, String(correctAnswer)];
};

export { gcdRules, gcdData };
