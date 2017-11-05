import { cons } from 'hexlet-pairs';
import { random } from './even';
import brainGames from '..';

const progression = (delta, firstMemb, changeMemb) => {
  let hiddenMemb = '';
  let acc = '';
  const iter = (i) => {
    if (i === changeMemb) {
      hiddenMemb = firstMemb + (delta * (i - 1));
      acc += '.. ';
      return iter(i + 1);
    } else if (i === 11) {
      return cons(`${acc}`, `${hiddenMemb}`);
    }
    acc += `${firstMemb + (delta * (i - 1))} `;
    return iter(i + 1);
  };
  return iter(1);
};

export const progressionGame = () => {
  const content = progression(random(10, 1), random(99, 1), random(10, 1));
  return content;
};
export const brainProgression = () => {
  brainGames('What number is missing in this progression?', progressionGame);
};
