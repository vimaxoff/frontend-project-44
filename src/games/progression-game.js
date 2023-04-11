import { randomNum, array } from './calculations.js';

const progressionRules = 'What number is missing in the progression?';

const progressionData = () => {
  const coll = array();
  const correctAnswer = coll[randomNum(coll.length - 1)];
  const progression = [];
  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] === correctAnswer) {
      progression.push('..');
    } else progression.push(coll[i]);
  }
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export { progressionRules, progressionData };
