import { cons } from 'hexlet-pairs';
import { random } from './even';
import { brainGames } from '..';

export const gcdGame = () => {
  const x = random(20);
  const y = random(30);
  const iter = (a, b, i, j) => {
    if ((a < i) || (b < i)) {
      return cons(`${a} ${b}`, `${j}`);
    }
    if ((x % i === 0) && (y % i === 0)) {
      return iter(a, b, i + 1, i);
    }
    return iter(a, b, i + 1, j);
  };
  return iter(x, y, 1, 0);
};

export const brainGcd = () => {
  brainGames('Find the greatest common divisor of given numbers.', gcdGame);
};
