import { cons } from 'hexlet-pairs';
import { random } from './even';
import brainGames from '..';


export const calcGame = () => {
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

export const brainCalc = () => {
  brainGames('What is the result of the expression?', calcGame);
};
