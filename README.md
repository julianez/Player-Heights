# Player Heights by Julian Echeverry

## Technical and architectural decisions

Based on the criterias of performance, simplicity and elegance, the runtime environment chossen was **Node.js** .

**Node.js** has built-in modules for Input Redirection and JSON handling.

**Docker** to assure that the application run in another machine, that doesn't have node installed, the project was dockerized.

## Frameworks / libraries

>### Execution
>As node.js has the required built-in modules to handle user input and json strings, there was no necessary any framework or adding extra libraries at execution time

>### Testing / Coverage
>As test framework it was selected Mocha, and for assertions the chai library is being used.
>Nyc was added to the project to get coverage of the tests, to assure full coverage of the tests.

## How to build and run the project

To build the project execute the following docker command:

`docker build --no-cache -t player-heights-docker --target prod .`

To run the project, you have 2 options:
1. Mode: Line by line

Execute the following docker command:

`docker run -i player-heights-docker`

After executing the command you need to enter the data in the console, as shown in this image, and the result will appear:
![Line by Line](/documentation/linebyline.png "Line by Line")

2. Mode: Input Redirection

Execute the following docker command:

`docker run -i player-heights-docker < test/test.json`

After executing the command the result will appear, as shown in the image:
![Input Redirection](/documentation/inputredirection.png "Input Redirection")

You can change **input file** to get other results.

## How to run tests and coverage of the project

1. Tests
To build the project and execute the test, execute the following docker command:
`docker build --no-cache --progress=plain -t player-heights-docker --target test .`

After executing the command you will see the tests result:
![Tests](/documentation/tests.png "tests")

2. Coverage
`docker build --no-cache --progress=plain -t player-heights-docker --target coverage .`
After executing the command the result will appear, as shown in the image:
![Coverage](/documentation/coverage.png "Coverage")

