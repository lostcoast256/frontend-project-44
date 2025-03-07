import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';
// thanks groupmate. shoutouts to Sarsela

// random operator for the question
const rand = getRandomIntInclusive(0, 2);

const randOper = () => {
  let oper = '';
  switch (rand) {
    case 2:
      oper = '*';
      break;
    case 1:
      oper = '+';
      break;
    default:
      oper = '-';
      break;
  }
  return oper;
};

const randCalc = (num1, num2) => {
  let result = '';
  switch (rand) {
    case 2:
      result = num1 * num2;
      break;
    case 1:
      result = num1 + num2;
      break;
    default:
      result = num1 - num2;
      break;
  }
  return result;
};

const game = (name) => {
  console.log('What is the result of the expression?');

  let win = 0;
  while (win < 3) {
    const setFirstNum = getRandomIntInclusive(1, 50);
    const setLastNum = getRandomIntInclusive(1, 50);

    console.log(`Question: ${setFirstNum} ${randOper()} ${setLastNum}`);
    const tAnswer = randCalc(setFirstNum, setLastNum);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toString() === tAnswer.toString()) {
      console.log('Correct!');
      if (win === 2) {
        return console.log('Congratulations!');
      }
      win += 1;
    } else {
      win = 0;
      console.log(`${answer} was a wrong answer. Correct answer was ${tAnswer}.`);
      console.log(`Let's try again, ${name}.`);
    }
  }
};

export { game };
