const axios = require('axios');

/**
 * Class to handle a Stock Operation (Line Input)
 * @param  {String} userInput JSON Array
 * @return {Array} taxResponseArray JSON Array with Taxes
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

        (async () => {
            try {
              const response = await axios.get(this.playersURL);
              let playersArray1 = Array.from(response.data.values);
              let playersArray2 = Array.from(response.data.values);
              this.matches = 0;
           
            playersArray1.forEach(playerA => {
              playersArray2.forEach(playerB => this.evalAndPrint(playerA,playerB))
              playersArray2.shift();
            });

            if(this.matches===0)
              console.log("No matches found");
          
            } catch (error) {
              console.log(error.message);
            }
          })();

    }

     /**
     * Evaluate a Print Pairs in console
     */
    evalAndPrint(playerA,playerB) {

        if(((parseInt(playerA.h_in) + parseInt(playerB.h_in)) === this.expectedSum)&&((playerA.first_name !== playerB.first_name)&& (playerA.last_name !== playerB.last_name))){
          console.log("- "+playerA.first_name+" "+playerA.last_name+"\t\t\t"+playerB.first_name+" "+playerB.last_name);
          this.matches++;
        }

          
      }

}

module.exports = Players;