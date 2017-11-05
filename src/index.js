import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


const brainGames = (rules, func) => {
  console.log('Welcome to the Brain Games!');
  if (rules === undefined) {
    const usName = readlineSync.question('\nMay I have your name? ');
    return console.log(`Hello, ${usName}!`);
  }
  console.log(`${rules}`);
  const usName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${usName}!\n`);
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${usName}!`);
    }
    const content = func();
    const question = car(content);
    console.log(`Question: ${question}`);
    const userAnsw = readlineSync.question('Your answer: ');
    const trueAnsw = cdr(content);
    if (userAnsw !== trueAnsw) {
      return console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${trueAnsw}'.\nLet's try again, ${usName}!`);
    }
    console.log('Correct!');
    return iter(acc + 1);
  };
  return iter(0);
};

export default brainGames;
