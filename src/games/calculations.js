const yesOrNo = (num) => (num % 2 === 0 ? 'yes' : 'no');

const randomNum = () => Math.round(Math.random() * (100 - 1) + 1);

const randomSign = () => {
  const signs = ['+', '-', '*'];
  let result = '';
  result += `${signs[Math.round(Math.random() * 2)]}`;
  return result;
};

const calculator = (str) => {
  const separator = ' ';
  const elements = str.split(separator);
  let result = 0;
  if (elements[1] === '+') {
    result = String(Number(elements[0]) + Number(elements[2]));
  } else if (elements[1] === '-') {
    result = String(Number(elements[0]) - Number(elements[2]));
  } else if (elements[1] === '*') {
    result = String(Number(elements[0]) * Number(elements[2]));
  }
  return result;
};

export {
  yesOrNo, randomNum, randomSign, calculator,
};
