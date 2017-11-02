import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const random = x => Math.floor((Math.random() * x) + 1);

const Calc = () => {
  const r1 = random(10);
  const r2 = random(10);
  switch (random(3)) {
    case 1:
      return cons((`${r1}*${r2}`), `${r1 * r2}`);
    case 2:
      return cons((`${r1}-${r2}`), `${r1 - r2}`);
    default:
      return cons((`${r1}+${r2}`), `${r1 + r2}`);
  }
};

const EvenGame = () => {
  const r = random(100);
  return cons(r, ((r % 2 === 0) ? 'yes' : 'no'));
};

const play = (x, acc, f) => {
  if (acc === 3) {
    return console.log(`Congratulations, ${x}!`);
  }
  const fu = f();
  const zagad = car(fu);
  console.log(`Question: ${zagad}`);
  const answ = readlineSync.question('Your answer: ');
  const trueAnsw = cdr(fu);
  if (answ !== trueAnsw) {
    return console.log(`'${answ}' is wrong answer ;(. Correct answer was '${trueAnsw}'.\nLet's try again, ${x}!`);
  }
  console.log('Correct!');
  return play(x, acc + 1, f);
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  play(name, 0, EvenGame);
};

export const brainCalc = () => {
  console.log('Welcome to the Brain Games!\nWhat is the result of the expression?');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  play(name, 0, Calc);
};

export const brainGames = () => {
  console.log('Welcome to the Brain Games! \n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
