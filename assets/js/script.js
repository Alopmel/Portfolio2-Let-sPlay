const buttons = document.querySelectorAll(".btn-elements");
const cpu_img = document.getElementById("cpu-img");
const resultText = document.getElementById("result-message");
const scoreP = document.getElementById("score");
const user_img = document.getElementById("human-img");



//Global Variables
let score = 0;
const result = ["tie","win","loose"]                            // Contains the result values
const choices = ["rock","paper","scissors","lizard","spock"]    // Contains all elements

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
const cpChioce = choices[cpu];
console.log(`CPNUMBER: ${cpu}`)
console.log(`CPElEMENT: ${cpChioce}`)
let game_result = 0;


/*
* Create a random number.
* It is used to give value to the choice of CPU
*/ 
function pickRandomChoise(){
    return Math.floor(Math.random() * 5)
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
        game_result = board_game[cpu][user]

        addOnDom();
    });
})


// Insert the result obtained and the selected images on the screen
function addOnDom(){
    resultText.innerHTML = `You ${result[game_result]}. <br> ${descrip_game[cpu][user]}`
    // Create a variable path
    user_img.src = "assets/images/"+choices[user]+".png";
    cpu_img.src = "assets/images/"+choices[cpu]+".png";  
}

/**
}

 * The variables that save the possible results and the elements that can be chosen are created.
 * A two-dimensional array is created in which the result of the choice of the user and the CPU is calculated

function chooseElement(human){
    // Contains the result values
    let i = 1;
    let score = 3
    const result = ["tie","win","loose"]
    // Contains all elements
    const elements = ["rock","paper","scissors","lizard","spock"]
    // A two-dimensional array where the game is encoded. The columns are the user's movement and the rows are those of the computer. The numbers are the result.
    const board_game = [
                        [0,1,2,2,1],
                        [2,0,1,1,2],
                        [1,2,0,2,1],
                        [1,2,1,0,2],
                        [2,1,2,1,0]
                    ];
    

    // Game description
    const descrip_game = [
                            ["Are the same", "Paper covers rock", "Rock crushes scissors", "Rock crushes lizard", "Spock vaporizes rock"],
                            ["Paper covers rock", "Are the same", "Scissors cuts paper", "Lizard eats paper", "Paper disproves Spock"],
                            ["Rock crushes scissors","Scissors cuts paper","Are the same","Scissors decapitates lizard","Spock smashes scissors"],
                            ["Rock crushes lizard","Lizard eats paper","Scissors decapitates lizard","Are the same","Lizard poisons Spock"],
                            ["Spock vaporizes rock","Paper disproves Spock","Spock smashes scissors","Lizard poisons Spock","Are the same"]
                        ];    
    // CPU chooses a random item betwen 0 and 4 
    const cpu = Math.floor((Math.random() * 5));
    // Game result. 
    const game_result = board_game[cpu][human];
    console.log(game_result)                  
    // Add the result in the html
    resultText.innerHTML = `You ${result[game_result]}!! ${descrip_game[human][cpu]}!`
    console.log(`You choose ${elements[human]}, and the CPU choose ${elements[cpu]} So you ${result[game_result]}`)
    // Create the path of the image chosen by the user and the cpu
    human_img.src = "assets/images/"+elements[human]+".png";
    cpu_img.src = "assets/images/"+elements[cpu]+".png";

    // Message to be reproduced by the browser                    
    //const message = new SpeechSynthesisUtterance(`You choose ${elements[human]}, and the CPU choose ${elements[cpu]}. So you ${result[game_result]}, because ${descrip_game[human][cpu]} `)                        
    //message.lang = 'en-US'
    //window.speechSynthesis.speak(message) 
    if (game_result == 1 ){
        score++;
        scoreP.innerText = score;
    }else{
        score--;
        scoreP.innerText = score;
    }
}
 */
