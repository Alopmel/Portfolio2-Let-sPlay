const buttons = document.querySelectorAll(".btn-elements");
const cpu_img = document.getElementById("cpu-img");
const close = document.getElementById('close');
const descriptionText = document.getElementById("description-message");
const main = document.getElementById("main");
const modal_container = document.getElementById('modal_container');
const reset = document.getElementById("reset");
const resultText = document.getElementById("result-message");
const section = document.getElementById("section");
const scoreP = document.getElementById("score");
const open = document.getElementById('open');
const user_img = document.getElementById("human-img");

//Global Variables
let score = 0;
const result = ["tie","win","loose"];                           // Contains the result values
const choices = ["rock","paper","scissors","lizard","spock"];   // Contains all elements

const board_game = [
    [0,1,2,2,1],            // A two-dimensional array where the game is encoded.
    [2,0,1,1,2],            // The columns are the user's movement and the rows
    [1,2,0,2,1],            // are those of the computer. The numbers are the result.
    [1,2,1,0,2],
    [2,1,2,1,0]
];
const descrip_game = [      // Game description
    ["Are the same", "Paper covers rock", "Rock crushes scissors", 
     "Rock crushes lizard", "Spock vaporizes rock"],
    ["Paper covers rock", "Are the same", "Scissors cuts paper", 
     "Lizard eats paper", "Paper disproves Spock"],
    ["Rock crushes scissors","Scissors cuts paper","Are the same",
     "Scissors decapitates lizard","Spock smashes scissors"],
    ["Rock crushes lizard","Lizard eats paper","Scissors decapitates lizard",
     "Are the same","Lizard poisons Spock"],
    ["Spock vaporizes rock","Paper disproves Spock","Spock smashes scissors",
     "Lizard poisons Spock","Are the same"]
];

// Variables to save CPU and user choices and the result
let cpu = 0; 
let user = 0;
let game_result = 0;


/*
* Create a random number.
* It is used to give value to the choice of CPU
*/ 
function pickRandomChoise(){
    return Math.floor(Math.random() * 5);
}

/*
*
* Every time that click a button, you collect the added value in data-choise
* CPU choice is updated
* We obtain the result of the game
* 
*/
buttons.forEach(button => {
    button.addEventListener('click', () => {
        user = button.getAttribute('data-choice');
        cpu = pickRandomChoise();
        game_result = board_game[cpu][user];
        addOnDom();
        checkWinner();
    });
});   



// Reset hide the section and show the main
reset.addEventListener('click', ()=>{
    main.style.display = "block";
    section.style.display = "none";     
});
// Insert the result obtained and the selected images on the screen
function addOnDom(){   
    resultText.innerHTML = `${result[game_result]}`;
    descriptionText.innerHTML = descrip_game[cpu][user];
    // Create a variable path
    user_img.src = "assets/images/"+choices[user]+".png";
    cpu_img.src = "assets/images/"+choices[cpu]+".png";  
}

// Update and insert the score on the screen
function updateScore(value){
    score += value;
    scoreP.innerText = score;
}

// Validate who wins
function checkWinner(){

    if(game_result == 2 ) {         // 2 is equal to loose        
        if (score == 0) { 
            scoreP.innerText = 0;            
        } else {
            updateScore(-1);       // one is subtracted from the score      
        }   
    } else if (game_result == 1) {   // 1 is equal to win 
        updateScore(1);              // Add one to the score         
     }
     else {
         score = score;             // When it is tie the score remains the same
     }

     //Show the selection || Hide the main
     main.style.display = "none";
     section.style.display = "block";
}

// Code to open the modal window of the game rules
open.addEventListener('click', () => {
    modal_container.classList.add('show');  
  });
  
  close.addEventListener('click', () => {
    modal_container.classList.remove('show');
  });