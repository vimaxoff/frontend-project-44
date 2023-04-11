import { randomNum, isPrime } from './calculations.js';

const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeData = () => {
  const question = randomNum();
  const correctAnswer = isPrime(question);
  return [question, String(correctAnswer)];
};

export { primeRules, primeData };
