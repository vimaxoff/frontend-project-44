const yesOrNo = (num) => (num % 2 === 0 ? 'yes' : 'no');

const randomNum = (base = 100, min = 1) => Math.round(Math.random() * (base - min) + min);

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

const greatestCommonDevisor = (firstNumber, secondNumber) => {
  if (firstNumber === 0) {
    return secondNumber;
  } if (secondNumber === 0) {
    return firstNumber;
  }
  const remainder = firstNumber % secondNumber;
  return greatestCommonDevisor(secondNumber, remainder);
};

const array = () => {
  const result = [];
  const startNumber = randomNum(25);
  const difference = randomNum(10);
  const arrayLength = randomNum(11, 5);
  for (let i = 0; i < arrayLength; i += 1) {
    if (result.length === 0) {
      result.push(startNumber);
    } result.push(result[i] + difference);
  }
  return result;
};

const isPrime = (num) => {
  let result = '';
  if (num === 1) {
    result = 'no';
    return result;
  }

  for (let i = 2; i < Math.round(num / 2); i += 1) {
    if (num % i === 0) {
      result = 'no';
      return result;
    } result = 'yes';
  }
  return result;
};

export {
  yesOrNo, randomNum, randomSign, calculator, greatestCommonDevisor, array, isPrime,
};
