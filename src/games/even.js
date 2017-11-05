import { cons } from 'hexlet-pairs';
import brainGames from '..';

export const random = (x, y) => Math.floor((Math.random() * x) + y);
export const getCorrectAnswer = (x) => {
  if (x === true) {
    return 'yes';
  }
  return 'no';
};
const isEven = x => x % 2 === 0;

const evenGame = () => {
  const r = random(1000, 1);
  const content = cons(r, getCorrectAnswer(isEven(r)));
  return content;
};

export const brainEven = () => {
  brainGames('Answer "yes" if number even otherwise answer "no".', evenGame);
};
