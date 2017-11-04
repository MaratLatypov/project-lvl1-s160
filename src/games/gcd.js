import { cons } from 'hexlet-pairs';
import { random } from './even';
import { brainGames } from '..';

export const gcdGame = () => {
  const r1 = random(20);
  const r2 = random(30);
  const iter = (a, b, i, j) => {
    if ((a < i) || (b < i)) {
      const content = cons(`${a} ${b}`, `${j}`);
      return content;
    }
    if ((r1 % i === 0) && (r2 % i === 0)) {
      return iter(a, b, i + 1, i);
    }
    return iter(a, b, i + 1, j);
  };
  return iter(r1, r2, 1, 0);
};

export const brainGcd = () => {
  brainGames('Find the greatest common divisor of given numbers.', gcdGame);
};
