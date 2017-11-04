import { cons } from 'hexlet-pairs';
import { brainGames } from '..';

export const random = x => Math.floor((Math.random() * x) + 1);

const evenGame = () => {
  const r = random(100);
  const isEven = x => x % 2 === 0;
  const getCorrectAnswer = (x) => {
    if (x === true) {
      return 'yes';
    }
    return 'no';
  };
  const content = cons(r, getCorrectAnswer(isEven(r)));
  return content;
};

export const brainEven = () => {
  brainGames('Answer "yes" if number even otherwise answer "no".', evenGame);
};
