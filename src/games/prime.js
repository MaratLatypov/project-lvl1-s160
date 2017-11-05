import { cons } from 'hexlet-pairs';
import { random, getCorrectAnswer } from './even';
import brainGames from '..';

const isPrime = (x) => {
  let acc = 0;
  const iter = (i) => {
    if ((acc >= 2) || (i === x)) {
      return acc < 2;
    } if (x % i === 0) {
      acc += 1;
    }
    return iter(i + 1, acc);
  };
  return iter(1);
};

const primeGame = () => {
  const r = random(100, 3);
  const content = cons(r, getCorrectAnswer(isPrime(r)));
  return content;
};

const brainPrime = () => {
  brainGames('Is this a prime number?', primeGame);
};

export default brainPrime;
