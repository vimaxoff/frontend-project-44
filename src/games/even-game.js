import {
  evenRules, greet, winnerCongratulation, makeQuestion, wrongAnswer,
} from './sentenses.js';
import { randomNum, yesOrNo } from './calculations.js';

const isEven = () => {
  const userName = greet();
  evenRules();

  let i = 0;
  while (i < 3) {
    const number = randomNum();
    const answer = makeQuestion(number);
    const even = answer === 'yes' && number % 2 === 0;
    const notEven = answer === 'no' && number % 2 !== 0;
    const wrongAnswerYes = answer === 'yes' && number % 2 !== 0;
    const wrongAnswerNo = answer === 'no' && number % 2 === 0;
    const unexpectedAnswer = (answer !== 'no' || answer !== 'yes');
    const wrightAnswer = yesOrNo(number);

    if (even || notEven) {
      console.log('Correct!');
      i += 1;
    } else if (wrongAnswerYes || wrongAnswerNo || unexpectedAnswer) {
      return wrongAnswer(answer, wrightAnswer, userName);
    }
  }
  return winnerCongratulation(userName);
};

export default isEven;
