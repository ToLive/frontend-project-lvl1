import readlineSync from 'readline-sync';

const ANSWERS_TO_WIN = 3;

const startGame = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Game!');
  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);

  for (let i = 0; i < ANSWERS_TO_WIN; i += 1) {
    const { question, rightAnswer } = getGameData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer.toString() !== userAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
