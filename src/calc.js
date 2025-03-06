import readlineSync from 'readline-sync';

// setting less value for multiplication so the result

  const setFirstNum = Math.round(Math.random() * 100);
  const setLastNum = Math.round(Math.random() * 100);
  
  const min = Math.ceil(0);
  const max = Math.floor(2);
  const rand = Math.floor(Math.random() * (max - min + 1) - min);
  
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

  const randCalc = () => {

    let result = '';
    switch (rand) {
      case 2:
        result = setFirstNum * setLastNum;
        break;
      case 1:
        result = setFirstNum + setLastNum;
        break;
      default:
        result = setFirstNum - setLastNum;
        break;
    }
    return result;
  };

  export default () => {
  console.log('What is the result of the expression?');

  let win = 0;
  while (win < 3) {
    
    
    console.log(`Question: ${setFirstNum} ${randOper()} ${setLastNum}`);
    const tAnswer = randCalc();
    console.log(`[DEBUG] ${tAnswer}`);
    const answer = readlineSync.question('Your answer: ');
    
    if (answer.toString() === tAnswer.toString()) {
        console.log('Correct!');
        if (win === 2) {
            return console.log('Congratulations!');
         }
        win += 1;
    } else {
        win = 0;
        console.log(`${answer} was a wrong answer. Correct answer was ${tAnswer}`);
      console.log(`Let's try again, shall we?`);
    }
  }  
};
 