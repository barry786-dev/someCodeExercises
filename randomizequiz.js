const randomNumber = Math.ceil(Math.random() * 10);
let attempts = 3;
while (attempts > 0) {
  console.log(attempts);
  const guessedNumber = parseInt(
    prompt(`try a number! you have ${attempts} attepmts`)
  );
  if (isNaN(guessedNumber) || guessedNumber > 10 || guessedNumber < 0) {
    alert('please enter a number between 1 -10');
  } else if (guessedNumber === randomNumber) {
    alert(`Good for you , you win , the number was : ${randomNumber} `);
    attempts = 0;
  } else {
    attempts = attempts - 1;
    if (attempts === 0) {
      alert(`Unfortunatly you lost, the right Number was : ${randomNumber}`);
    }
  }
}

// onther solution without recursion and you do not neeed to load in the HTML body
/* let anumber = Math.floor(Math.random() * 11);
let attempts = 1;
let attemptsarr = ['first', 'second', 'third'];
let attemptsstr = attemptsarr[attempts - 1];
let guessed = prompt(
  'Guess a number between 1-10: you have only three attempts'
);
for (i = 1; i < 4; i++) {
  if (guessed == anumber) {
    alert(
      `well done! you win! the number was : ${anumber} you guessed it right from ${attemptsstr} attempts`
    );
    break;
  } else {
    if (attempts === 3) {
      alert(
        `Sorry! you lost! that was the last attempts and the right number was : ${anumber}`
      );
    } else
    {attempts++;
    attemptsstr = attemptsarr[attempts - 1];
    guessed = prompt(
      `wrong! try again! you still have ${attemptsstr} attempts`
    );}
  }
} */

// onther solution
/* let num = Math.ceil(Math.random() * 10);
let attempts = 3;

function guess(att) {
  let guessed = prompt(`enter a number you have still ${att} attempts`);

  if (Math.floor(guessed) === num) {
    alert('well done, you win');
    return;
  } else if (att === 1) {
    alert(
      `you used all your attempts with no success, the right number was : ${num} refresh the page to start again`
    );
    return;
  } else {
    att--;
    guess(att);
  }
} */
