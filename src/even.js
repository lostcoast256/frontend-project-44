import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let win = 0;
  while (win < 3) {
    const setNum = getRandomIntInclusive(1, 1000);
    console.log(`Question: ${setNum}`);
    const answer = readlineSync.keyInYN('Your answer: ');
    if ((answer && setNum % 2 === 0) || (!answer && setNum % 2 !== 0)) {
      console.log('Correct!');
      if (win === 2) {
        return console.log('Congratulations!');
      }
      win += 1;
    } else {
      win = 0;
      console.log(`${answer} was a wrong answer. Correct answer was ${!answer}.`);
      console.log(`Let's try again, ${name}.`);
    }
  }
};
