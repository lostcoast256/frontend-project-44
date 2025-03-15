import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

// gcd(a, 0) = gcd(0, a) = |a|

function getGCD(a, b) {
// SOF q 17445231
// if there is a better, "readable for newbies" way to make this, please tell me
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  while (true) {
    if (b === 0) { return a; }
    a %= b;
    if (a === 0) { return b; }
    b %= a;
  }
}

const game = (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  let win = 0;
  while (win < 3) {
    const firstNum = getRandomIntInclusive(1, 100);
    const lastNum = getRandomIntInclusive(1, 100);
    const cAnswer = getGCD(firstNum, lastNum);
    console.log(`Question: ${firstNum} ${lastNum}`);
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
