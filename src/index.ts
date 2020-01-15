
import './styles.css';
// console.log('Ready to Party With Some TypeScript!');

// 1. Find the faluable things.

const secretNumber = Math.floor((Math.random() * 9) + 1);

const squares = document.querySelectorAll('.square') as NodeListOf<HTMLDivElement>;

let currentSquare = 1;
squares.forEach(sq => {
    if (currentSquare === secretNumber) {
        sq.dataset.secret = 'true';
    }
    currentSquare++;
    sq.addEventListener('click', handleClick);

});

function handleClick() {
    // this means in this case, this div tag!! people will rename the element as that often, to not confuse it.
    const that = this as HTMLDivElement;
    const isWinner = this.dataset.secret === 'true';
    if (isWinner) {
        that.classList.add('winner');
    } else {
        that.classList.add('loser');
    }
    that.removeEventListener('click', handleClick);
    console.log(`the secret number is ${secretNumber}`);
}

// once you win, all the other guesses should be marked as losers
// maybe make a play again button that resets everything
// if you win display a message telling them how awesome they are.
// if they lose(YOU PICKED EVERY ONE BUT THE WINNER).



