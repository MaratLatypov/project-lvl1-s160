import { cons } from 'hexlet-pairs';
import { random } from './even';
import brainGames from '..';

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
const balance = (x) => {
  const iter = (sum, n, acc) => {
    if (n === 0) {
      return acc;
    }
    const bb = Math.floor(sum / n);
    return iter(sum - bb, n - 1, acc + bb);
  };
  return iter(sumOfThe(x), numberOfDigitsIn(x), '');
};

export const balanceGame = () => {
  const number = random(10000, 1);
  const content = cons(number, balance(number));
  return content;
};
export const brainBalance = () => {
  brainGames('Balance the given number.', balanceGame);
};
