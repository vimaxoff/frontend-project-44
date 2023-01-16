import {
  greet, makeQuestion, winnerCongratulation, wrongAnswer,
} from './games/sentenses.js';

const engine = (rules, gameData) => {
  const userName = greet();
  console.log(rules);

  let i = 0;
  while (i < 3) {
    const questionAnswerArr = gameData();
    const answer = makeQuestion(questionAnswerArr[0]);

    if (questionAnswerArr[1] === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      return wrongAnswer(answer, questionAnswerArr[1], userName);
    }
  }
  return winnerCongratulation(userName);
};

export default engine;
