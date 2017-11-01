import readlineSync from 'readline-sync';

const random = () => Math.round(Math.random() * 1000);
const chet = (x) => {
  if (x % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const play = (x, y) => {
  const zagad = random();
  console.log(`Question: ${zagad}`);
  const answ = readlineSync.question('Your answer: ');
  const trueAnsw = chet(zagad);
  if (y === 2) {
    return console.log(`Congratulations, ${x}!`);
  }
  if (answ !== trueAnsw) {
    return console.log(`'${answ}' is wrong answer ;(. Correct answer was '${trueAnsw}'.\nLet's try again, ${x}!`);
  }
  console.log('Correct!');
  return play(x, y + 1);
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return play(name, 0);
};
export const brainGames = () => {
  console.log('Welcome to the Brain Games! \n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
