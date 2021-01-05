import startGame from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isPrime = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }

  let maxDivisor = 1;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      maxDivisor = i;
    }
  }

  if (maxDivisor > 1) {
    return false;
  }

  return true;
};

const run = () => {
  const getGameData = () => {
    const num = getRandomInt(50);

    const question = `${num}`;
    const rightAnswer = isPrime(num) ? 'yes' : 'no';

    return {
      question,
      rightAnswer,
    };
  };

  startGame(GAME_DESCRIPTION, getGameData);
};

export default run;
