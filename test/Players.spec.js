const players = require("../app/models/Players");
const expect = require('chai').expect;
const stdout = require("test-console").stdout;

describe('Players tests', () => {

        it('evalAndPrint:', () => {

            const playersURL = "url";
            const expectedSum = 142;

            let nbaPlayers = new players(playersURL,expectedSum);
            
            const playerA = {first_name:"Name A", last_name:"Last A", h_in:"72"};
            const playerB = {first_name:"Name B", last_name:"Last B", h_in:"70"};
            const output = stdout.inspectSync(() => {
                nbaPlayers.evalAndPrint(playerA,playerB);
            });

            expect(output[0]).to.contains("Name A");
        })  


})