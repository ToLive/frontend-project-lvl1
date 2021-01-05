import startGame from '../index.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getMaxCommonDivisor = (firstNum, secondNum) => {
  const minNum = (firstNum > secondNum ? secondNum : firstNum);

  let maxDivisor = 1;

  for (let i = 2; i <= minNum / 2; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      maxDivisor = i;
    }
  }

  return maxDivisor;
};

const run = () => {
  const getGameData = () => {
    const firstNumber = getRandomInt(50);
    const secondNumber = getRandomInt(50);

    const question = `${firstNumber} ${secondNumber}`;
    const rightAnswer = getMaxCommonDivisor(firstNumber, secondNumber);

    return {
      question,
      rightAnswer,
    };
  };

  startGame(GAME_DESCRIPTION, getGameData);
};

export default run;
