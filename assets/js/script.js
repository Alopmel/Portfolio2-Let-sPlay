function chooseElement(human){

    // Contains the result values
    const result = ["tie","win","loose"]
    // Contains all elements
    const elements = ["Rock","Paper","Scissors","Lizard","Spock"]
    // A two-dimensional array where the game is encoded. The columns are the user's movement and the rows are those of the computer. The numbers are the result.
    const board_game = [
                        [0,1,2,2,1],
                        [2,0,1,1,2],
                        [1,2,0,2,1],
                        [1,2,1,0,2],
                        [2,1,2,1,0]
                    ]
    
    // CPU chooses a random item
    const cpu = Math.floor((Math.random() * 5));
    // Game result 

    const game_result = board_game[cpu][human];
    console.log("Human: " + elements[human])
    console.log("CPU: " + elements[cpu])
    console.log(result[game_result])
}