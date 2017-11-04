import { cons } from 'hexlet-pairs';
import { random } from './even';
import { brainGames } from '..';

const gcd = (x, y) => {
  const iter = (a, b, i, j) => {
    if ((a < i) || (b < i)) {
      return j;
    }
    if ((x % i === 0) && (y % i === 0)) {
      return iter(a, b, i + 1, i);
    }
    return iter(a, b, i + 1, j);
  };
  return iter(x, y, 1, 0);
};

export const gcdGame = () => {
  const r1 = random(20);
  const r2 = random(30);
  const content = cons(`${r1} ${r2}`, `${gcd(r1, r2)}`);
  return content;
};

export const brainGcd = () => {
  brainGames('Find the greatest common divisor of given numbers.', gcdGame);
};
