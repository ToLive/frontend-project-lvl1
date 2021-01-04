import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let gameover = false;
  let answerCounter = 0;

  while (!gameover) {
    const num = Math.floor(Math.random() * Math.floor(100));
    const rightAnswer = ((num % 2 === 0) ? 'yes' : 'no');

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ').toString();

    if (answer !== rightAnswer) {
      gameover = true;
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    } else {
      answerCounter += 1;
      console.log('Correct!');
    }

    if (answerCounter === 3) {
      console.log(`Congratulations, ${name}!`);
      gameover = true;
    }
  }
};

export default evenGame;
