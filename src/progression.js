import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

// 10 numbers
const genLength = 10;

// random limit to 15
function genRow(l) {
  const row = [];
  const iniNum = getRandomIntInclusive(1, 15);
  let genNum = iniNum;
  row.push(genNum);
  // random 2 > 5 for progression
  const numAdd = getRandomIntInclusive(2, 5);
  //
  while (row.length < l) {
    genNum += numAdd;
    row.push(genNum);
  }
  // const cAnswer = row[hide];
  return row;
}

const getHiddenNumber = (row, i) => row[i];

const getHiddenRow = (row, i) => {
  row[i] = '...';
  return row.join(' ');
};

const game = (name) => {
  console.log('What is the number missing in the progression?');

  let win = 0;
  while (win < 3) {
    const row = genRow(genLength);
    const i = getRandomIntInclusive(0, genLength);
    const cAnswer = getHiddenNumber(row, i);

    console.log(`Question: ${getHiddenRow(row, i)}`);
    const answer = readlineSync.question('Your answer: ');

    if (cAnswer.toString() === answer.toString()) {
      console.log('Correct!');
      if (win === 2) {
        return console.log('Congratulations!');
      }
      win += 1;
    } else {
      win = 0;
      console.log(`${answer} was a wrong answer. Correct answer was ${cAnswer}.`);
      console.log(`Let's try again, ${name}.`);
    }
  }
};

export { game };
