import { cons } from 'hexlet-pairs';
import { random } from './even';
import { brainGames } from '..';

const progression = (d, l, a1, empty) => {
  const iter = (i, acc, answer) => {
    if ((i === l) && (i === empty)) {
      return cons((`${acc}..`), (`${a1 + (d * (i - 1))}`));
    } else if (i === l) {
      const spis = acc + (a1 + (d * (i - 1)));
      return cons(spis, answer);
    } else if (i === empty) {
      return iter(i + 1, (`${acc}.. `), (`${a1 + (d * (i - 1))}`));
    }
    return iter(i + 1, (`${acc} ${a1 + (d * (i - 1))} `), answer);
  };
  return iter(1, '', '');
};

export const progressionGame = () => {
  const delta = random(12);
  const a1 = random(100);
  const pass = random(9);
  const content = progression(delta, 10, a1, pass);
  return content;
};
export const brainProgression = () => {
  brainGames('What number is missing in this progression?', progressionGame);
};
