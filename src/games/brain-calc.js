import startGame from '../index.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';
const ALLOWED_OPERATORS = ['+', '-', '*'];

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRightAnswer = (leftOperand, rightOperand, operator) => {
  if (operator === '+') {
    return leftOperand + rightOperand;
  }

  if (operator === '-') {
    return leftOperand - rightOperand;
  }

  if (operator === '*') {
    return leftOperand * rightOperand;
  }

  return undefined;
};

const run = () => {
  const getGameData = () => {
    const leftOperand = getRandomInt(20);
    const rightOperand = getRandomInt(20);
    const operator = ALLOWED_OPERATORS[getRandomInt(3)];

    const question = `${leftOperand} ${operator} ${rightOperand}`;
    const rightAnswer = getRightAnswer(leftOperand, rightOperand, operator);

    return {
      question,
      rightAnswer,
    };
  };

  startGame(GAME_DESCRIPTION, getGameData);
};

export default run;
