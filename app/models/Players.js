const request = require('./Request');

/**
 * Class to get Pairs of Players (Line Input)
 * @param  {String} playersURL URL of players
 * @return {Integer} expectedSum expected SUM
  */

class Players {
    constructor(playersURL,expectedSum){
        this.playersURL=playersURL;
        this.expectedSum=expectedSum;
        this.matches = 0;
    }

    /**
     * Get Taxes with the userInput
     * @return {taxResponseArray} Add taxes to Array
     */
    findPairs(){
      console.log("-------------------------------------------------------------");  
        (async () => {
            try {
              const response = await request.get(this.playersURL);
              let playersArray1 = Array.from(response.data.values);
              let playersArray2 = Array.from(response.data.values);
              this.matches = 0;           
            
            //First element of second array is removed each time to improve performance, prevent duplicates, and prevent pairs of same player

            playersArray1.forEach(playerA => {
              playersArray2.shift(); 
              playersArray2.forEach(playerB => this.evalAndPrint(playerA,playerB))

            });

            if(this.matches===0)
              console.log("No matches found");
            
            console.log("-----------------------------------------------------------\n\n");          
            } catch (error) {
              console.log(error.message);
            }
            
          })();

    }

     /**
     * Evaluate a Print Pairs in console
     */
    evalAndPrint(playerA,playerB) {

        if(((parseInt(playerA.h_in) + parseInt(playerB.h_in)) === this.expectedSum)){
          console.log("- "+playerA.first_name+" "+playerA.last_name+"\t\t\t"+playerB.first_name+" "+playerB.last_name);
          this.matches++;
        }

          
      }

}

module.exports = Players;