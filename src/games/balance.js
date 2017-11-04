import { cons } from 'hexlet-pairs';
import { random } from './even';
import { brainGames } from '..';

const numberOfDigitsIn = x => Number(`${x}`.length);
const sumOfThe = (x) => {
  const stringNum = `${x}`;
  const n = numberOfDigitsIn(x);
  const iter = (i, acc) => {
    if (i >= n) {
      return acc;
    }
    return iter(i + 1, (acc + Number(stringNum[i])));
  };
  return iter(0, 0);
};

export const balanceGame = () => {
  const number = random(10000);
  const iter = (sum, n, acc) => {
    if (n === 0) {
      const content = cons(number, acc);
      return content;
    }
    const bb = Math.floor(sum / n);
    return iter(sum - bb, n - 1, acc + bb);
  };
  return iter(sumOfThe(number), numberOfDigitsIn(number), '');
};

export const brainBalance = () => {
  brainGames('Balance the given number.', balanceGame);
};
