import { cons } from 'hexlet-pairs';
import { random } from './even';
import { brainGames } from '..';

const numberOfDigits = x => Number(`${x}`.length);
const sumOfTheNumb = (x) => {
  const simv = `${x}`;
  const n = numberOfDigits(x);
  const iter = (i, acc) => {
    if (i >= n) {
      return acc;
    }
    return iter(i + 1, (acc + Number(simv[i])));
  };
  return iter(0, 0);
};

export const balanceGame = () => {
  const number = random(10000);
  const a = sumOfTheNumb(number);
  const b = numberOfDigits(number);
  const iter = (sum, n, acc) => {
    if (n === 0) {
      return cons(number, acc);
    }
    const bb = Math.floor(sum / n);
    return iter(sum - bb, n - 1, acc + bb);
  };
  return iter(a, b, '');
};

export const brainBalance = () => {
  brainGames('What is the result of the expression?', balanceGame);
};
