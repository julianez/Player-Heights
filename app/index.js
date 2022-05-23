const readline = require('readline');
const players = require("./models/Players");

const playersURL = "https://mach-eight.uc.r.appspot.com";

/**
 * Main JS of the Application
 * @description Receiving User Input or Input Redirection, Find Pairs and print result in screen
 * @param {String} userInput Keyboard input in console
 * @return not applicable
 * @
 */


//Interface to read User Input from CLI
const consoleInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
consoleInput.on('line', userInput => {

  console.log("\n\n-------------------------------------------------------------");  
    let nbaPlayers = new players(playersURL,+userInput);
    nbaPlayers.findPairs();

});

