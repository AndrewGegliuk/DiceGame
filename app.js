/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

//Get rendom number for current player score
//document.querySelector('#current-' + activePlayer).textContent = dice;

//Hide dice pic when you start the game
document.querySelector('.dice').style.display = 'none';

//Strart game and display all number "0"
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function (){
    // 1.Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2.Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // 3.Update the round score IF the rolled number was not a 1
    if(dice !== 1){
        //add sroce
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        /*
            if(activePlayer === 0){
                activePlayer = 1;
            }else{
                activePlater = 0;
            }
        */
    }

    });











