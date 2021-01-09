function rollDice() {
    let goldCoins = 0; //counter variable
    for (let i = 0; i < 10; i++) { //for loop instead of for of loop b/c it's not an array
        const roll = Math.floor(Math.random() * 6) +1; //simulate rolling dice by generating random number btwn 1-6
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if (roll === 4 && goldCoins > 0) {
            goldCoins -= 1;
            alert('Sorry you rolled a four and lost 1 coin. You now have a total of ' + goldCoins + ' gold coins.');
        }
        if (roll < 5) {
            alert('You currently have a total of ' + goldCoins + ' gold coins.');
            continue;
        }
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins! You now have a total of ' + goldCoins + ' gold coins.');
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}