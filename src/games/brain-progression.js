import startGame from '../index.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;

const getRandomInt = (min, max) => Math.floor(Math.random() * Math.floor(max - min) + min);

const generateProgression = () => {
  const progressionLength = getRandomInt(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const firstNum = getRandomInt(1, 10);
  const step = getRandomInt(1, 9);

  const progression = [];
  progression[0] = firstNum;

  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const run = () => {
  const getGameData = () => {
    const progression = generateProgression();
    const numberPositionToHide = getRandomInt(0, progression.length);
    const hiddenNumber = progression[numberPositionToHide];

    progression[numberPositionToHide] = '..';

    const question = progression.reduce((acc, value) => `${acc} ${value}`);
    const rightAnswer = hiddenNumber;

    return {
      question,
      rightAnswer,
    };
  };

  startGame(GAME_DESCRIPTION, getGameData);
};

export default run;
