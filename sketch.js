let preventOverflow = 50;
let windowWidth = window.innerWidth - 5;
let windowHeight = window.innerHeight - 5;
let gameText;
let game;
let randomOvals;
let staticTextColor;

function setup() {
    gameText = new GameText();
    game = new OvalGame(100);
    createCanvas(windowWidth, windowHeight);
    noStroke();
    game.setupColors();
    game.setupOvals();
    gameText.setupFont();
    game.setRightColor(game.getRandomColorFromAvailableColors()) ;
    gameText.setTextColor(game.getRightColor());
    staticTextColor = game.generateRandomColor();
}

function draw() {
    if(game.getCurrentGameState() === game.gameState.start) {
        clear();
        fill(staticTextColor);
        text('Try to hit the ovals with the same color as the score ', windowWidth / 2 + preventOverflow,  windowHeight / 2)
        text('Every time you miss a right oval or misclick you lose a point', windowWidth / 2 + preventOverflow,  windowHeight / 2 + 50)
        text('Dont let your score reach 0', windowWidth / 2 + preventOverflow,  windowHeight / 2 +  100)
        text('Click anywhere to start', windowWidth / 2 + preventOverflow,  windowHeight / 2 + 150)
    }
    if (game.getCurrentGameState() === game.gameState.open) {
        clear();
        fill(game.getRightColor());
        text("Score "+game.getCurrentGameScore(), windowWidth / 2 , preventOverflow)
        randomOvals = game.getOvals();
        for (let i = randomOvals.length-1; i >= 0; i--) {
            randomOvals[i].update();
            randomOvals[i].display();
            if (randomOvals[i].props.isDoneGrowing) {
                game.removeGrownOval(i);
                game.addNewOval();
            }
        }
        game.updateGameState();
    }
    if(game.getCurrentGameState() === game.gameState.gameOver) {
        clear();
        fill(staticTextColor);
        text('Game Over', windowWidth / 2 + preventOverflow,  windowHeight / 2 + preventOverflow)
        text('Click anywhere to start', windowWidth / 2 + preventOverflow,  windowHeight / 2 + preventOverflow + 50)
    }
}

function mouseClicked(event) {
    game.mouseClickedEventListener(event);
}



