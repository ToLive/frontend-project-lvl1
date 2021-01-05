import startGame from '../index.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const run = () => {
  const getGameData = () => {
    const question = Math.floor(Math.random() * Math.floor(100));
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    return {
      question,
      rightAnswer,
    };
  };

  startGame(GAME_DESCRIPTION, getGameData);
};

export default run;
