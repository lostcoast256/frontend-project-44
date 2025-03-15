import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../index.js';

function isPrime(num) {
  if (num < 2) { return false; }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const game = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  let win = 0;
  while (win < 3) {
    const setNum = getRandomIntInclusive(1, 100);
    console.log(`Question: ${setNum}`);
    const answer = readlineSync.keyInYN('Your answer: ');
    if (answer === isPrime(setNum)) {
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

export { game };
