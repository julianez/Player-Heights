const MockAdapter = require('axios-mock-adapter');
const expect = require('chai').expect;
const stdout = require("test-console").stdout;
const players = require("../app/models/Players");
const request = require("../app/models/Request");
const fs = require('fs');



describe('Players tests', () => {

    let stub = MockAdapter;
    let receivedData;

    
    beforeEach(() => {
        try {
            receivedData = fs.readFileSync('./test/players.json', 'utf8');
          } catch (err) {
            console.error(err);
          }
        stub = new MockAdapter(request);
        stub.onGet("url").replyOnce(200, receivedData);
    });

    it('findPairs - Wrong URL', async () => {

        const playersURL = "other url";
        const expectedSum = 10;

        let nbaPlayers = new players(playersURL,expectedSum);

        const output = await stdout.inspectAsync(async () => {
            await nbaPlayers.findPairs();
        });

            expect(output[0]).to.be.contains("404");

    })  

    it('findPairs - Expected sum 10 contains No matches found', async () => {

        const playersURL = "url";
        const expectedSum = 10;

        let nbaPlayers = new players(playersURL,expectedSum);

        const output = await stdout.inspectAsync(async () => {
            await nbaPlayers.findPairs();
        });

            expect(output[0]).to.be.contains("No matches found");

    })  

    it('findPairs - Expected sum 139 contains Nate', async () => {

        const playersURL = "url";
        const expectedSum = 139;

        let nbaPlayers = new players(playersURL,expectedSum);

        const output = await stdout.inspectAsync(async () => {
            await nbaPlayers.findPairs();
        });

            expect(output[0]).to.be.contains("Nate");

    })  

    it('findPairs - Expected sum 142 contains Chucky', async () => {

        const playersURL = "url";
        const expectedSum = 142;

        let nbaPlayers = new players(playersURL,expectedSum);

        const output = await stdout.inspectAsync(async () => {
            await nbaPlayers.findPairs();
        });

            expect(output[0]).to.be.contains("Chucky");

    })  

    it('evalAndPrint', () => {

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