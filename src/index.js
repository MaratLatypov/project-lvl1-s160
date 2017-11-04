import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


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

export const brainGames = (x, fun) => {
  const greeting = 'Welcome to the Brain Games!';
  const name = () => readlineSync.question('May I have your name? ');
  if (x !== undefined) {
    console.log(`${greeting}\n${x}\n`);
    return play(name(), 0, fun);
  }
  console.log(`${greeting}\n`);
  return console.log(`Hello, ${name()}!\n`);
};

export default play;
