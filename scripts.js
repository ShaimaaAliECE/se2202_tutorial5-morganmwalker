let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var buttonCount = 0;

// use the value stored in the nextPlayer variable to indicate who the next player is

let playerIndicator = document.createTextNode(nextPlayer);
document.getElementById('next-lbl').appendChild(playerIndicator);

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for (let i = 1; i <= 9; i++) {
       var newButton = document.createElement('button');
       newButton.setAttribute('id', 'b' + i)
       document.getElementById('c' + i).appendChild(newButton).innerHTML = "[ &nbsp ]";
   }
} 

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
    var clickedButton = event.target.id;
    document.getElementById(clickedButton).innerHTML = nextPlayer;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    document.getElementById(clickedButton).disabled = true;

    if (nextPlayer == 'X') {
        nextPlayer = 'O';
    }
    else if (nextPlayer == 'O') {
        nextPlayer = 'X';
    }

    playerIndicator.remove();
    playerIndicator = document.createTextNode(nextPlayer);
    document.getElementById('next-lbl').appendChild(playerIndicator);

    buttonCount++;

    if (winnerX()) {
        var winnerAnnounce = document.createElement('h1');
        winnerAnnounce.innerHTML = 'X is the winner!'
        document.getElementById('game-over-lbl').appendChild(winnerAnnounce);
        //document.querySelectorAll('c9').disabled = true;
        for (let i = 1; i <= 9; i++) {
            document.getElementById('b' + i).disabled = true;
        }
        //
    }

    if (winnerO()) {
        var winnerAnnounce = document.createElement('h1');
        winnerAnnounce.innerHTML = 'O is the winner!'
        document.getElementById('game-over-lbl').appendChild(winnerAnnounce);
        //document.querySelectorAll('c9').disabled = true;
        for (let i = 1; i <= 9; i++) {
            document.getElementById('b' + i).disabled = true;
        }
        //
    }

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        var gameOver = document.createElement('h1');
        gameOver.innerHTML = "Game over"
        document.getElementById('game-over-lbl').appendChild(gameOver);
    }
    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise
    if (buttonCount >= 9 || winnerX() || winnerO()) {
        return true;
    } 
    else {
        return false;
    }
} 

function winnerX() {
    var xCells = '';
    for (let i = 1; i <= 9; i++) {
        let str = document.getElementById('b' + i).textContent;
        if (str.valueOf() === ('X')) {
            xCells = xCells.concat(i.toString());
        }
    }
    if ((xCells.includes('1') && xCells.includes('2') && xCells.includes('3')) || (xCells.includes('1') 
    && xCells.includes('5') && xCells.includes('9')) || (xCells.includes('1') && xCells.includes('4') 
    && xCells.includes('7')) || (xCells.includes('3') && xCells.includes('6') && xCells.includes('9')) 
    || (xCells.includes('7') && xCells.includes('8') && xCells.includes('9')) || (xCells.includes('2') 
    && xCells.includes('5') && xCells.includes('8')) || (xCells.includes('4') && xCells.includes('5') 
    && xCells.includes('6')) || (xCells.includes('3') && xCells.includes('5') && xCells.includes('7'))) {
        return true;
    }
    //else if (oCells.includes('c1c2c3') || xCells.includes('c1c5c9') || xCells.includes('c1c4c7') || xCells.includes('c3c6c9') || xCells.includes('c7c8c9')) {
    //    return false;
    //}
    else {
        return false;
    }
}

function winnerO() {
    var oCells = '';
    for (let i = 1; i <= 9; i++) {
        let str = document.getElementById('b' + i).textContent;
        if (str.valueOf() === ('O')) {
            oCells = oCells.concat('c'.concat(i.toString()));
        }
    }
    if ((oCells.includes('1') && oCells.includes('2') && oCells.includes('3')) || (oCells.includes('1') 
    && oCells.includes('5') && oCells.includes('9')) || (oCells.includes('1') && oCells.includes('4') 
    && oCells.includes('7')) || (oCells.includes('3') && oCells.includes('6') && oCells.includes('9')) 
    || (oCells.includes('7') && oCells.includes('8') && oCells.includes('9')) || (oCells.includes('2') 
    && oCells.includes('5') && oCells.includes('8')) || (oCells.includes('4') && oCells.includes('5') 
    && oCells.includes('6')) || (oCells.includes('3') && oCells.includes('5') && oCells.includes('7'))) {
        return true;
    }
    else {
        return false;
    }
}