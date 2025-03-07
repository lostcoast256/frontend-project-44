import readlineSync from 'readline-sync';

// gcd(a, 0) = gcd(0, a) = |a|

const firstNum = getRandomIntInclusive(1, 100);
const lastNum = getRandomIntInclusive(1, 100);

// check division ternar operator
function getDiv(a) {
  return a % 2 === 0 ? 2 : 3;
}

function getGCD(a, b) {
//  check if even
  const firstN = Number.getDiv(a);
  const lastN = Number.getDiv(b);

  let result = 1;
  if (firstN !== lastN) {
    return result;
  }

  // the core: modify the result to gcd
  // cycle function to deter the greatest?

  return result;
}
