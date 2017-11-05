import { cons } from 'hexlet-pairs';
import { random, getCorrectAnswer } from './even';
import brainGames from '..';

const isPrime = (x) => {
  let acc = 0;
  const iter = (i) => {
    if ((i > x) || (acc >= 2)) {
      return acc >= 2;
    }
    if (x % i === 0) {
      acc += 1;
      return iter(i + 1);
    }
    return iter(i + 1);
  };
  return iter(2);
};

const primeGame = () => {
  const r = random(100);
  const content = cons(r, getCorrectAnswer(isPrime(r)));
  return content;
};

const brainPrime = () => {
  brainGames('Is it a simple number?', primeGame);
};

export default brainPrime;
