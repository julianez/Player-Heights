# Player Heights by Julian Echeverry

## Technical and architectural decisions

Based on the criterias of performance, simplicity and elegance, the runtime environment chossen was **Node.js** .

**Node.js** has built-in modules for Input, JSON handling and Axios was added to the project to get file from URL.

**Docker** to assure that the application run in another machine that doesn't have node installed, the project was dockerized.

## Frameworks / libraries

>### Testing / Coverage
>As test framework it was selected Mocha, and for assertions the chai library is being used.
>Nyc was added to the project to get coverage of the tests, to assure full coverage of the tests.

## How to build and run the project with Docker

To build the project execute the following docker command:

`docker build --no-cache -t player-heights-docker --target prod .`

To run the project, you have 2 execute the following docker command:

`docker run -i player-heights-docker`

After executing the command you need to enter the data in the console, as shown in this image, and the result will appear:<br/>

![Line by Line](/documentation/linebyline.png "Line by Line")

## How to see and test the project at codesandbox.io

There is a live version of the project at codesandbox.io:

https://codesandbox.io/s/relaxed-hoover-v2updl?file=/app/index.js

You just need to change the input in the following line;

![Codesandbox.io](/documentation/codesandbox.gif "Codesandbox.io")

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

