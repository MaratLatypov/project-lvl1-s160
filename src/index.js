import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


const play = (userName, acc, funcGame) => {
  if (acc === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  const content = funcGame();
  const question = car(content);
  console.log(`Question: ${question}`);
  const userAnsw = readlineSync.question('Your answer: ');
  const trueAnsw = cdr(content);
  if (userAnsw !== trueAnsw) {
    return console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${trueAnsw}'.\nLet's try again, ${userName}!`);
  }
  console.log('Correct!');
  return play(userName, acc + 1, funcGame);
};

export const brainGames = (gameName, funGame) => {
  const greeting = 'Welcome to the Brain Games!';
  const userName = () => readlineSync.question('May I have your name? ');
  if (gameName !== undefined) {
    console.log(`${greeting}\n${gameName}\n`);
    const usName = userName();
    console.log(`Hello, ${usName}!\n`);
    return play(usName, 0, funGame);
  }
  console.log(`${greeting}\n`);
  return console.log(`Hello, ${userName()}!\n`);
};

export default play;
