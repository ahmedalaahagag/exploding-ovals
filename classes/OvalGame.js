class OvalGame {
    props;
    //'open','gameover','start'
    gameState = {
        start: 0,
        open: 1,
        gameOver: 2
    };

    constructor(score = 0) {
        this.props = {
            randomOvals: [],
            numberOfOvals: 5,
            rightColor: null,
            availableColors: [],
            activeState: this.gameState.start,
            gameScore: score,
            score: new GameScore(score),
        }
    }

    setRightColor = (color= []) => {
      this.props.rightColor = color;
    };

    getOvals = () => {
        return this.props.randomOvals;
    };

    generateRandomColor = () => {
        return [
            Math.random() * 255 | 0,
            Math.random() * 255 | 0,
            Math.random() * 255 | 0
        ];
    };
    getRandomColorFromAvailableColors = () => {
        return this.props.availableColors
            [Math.floor(Math.random() * this.props.availableColors.length)];
    }
    setupOvals = () => {
        for (let i = 0; i < this.props.numberOfOvals; i++) {
            this.addNewOval();
        }
    };

    getRightColor = () => {
        return this.props.rightColor;
    };

    addNewOval = () => {
        this.props.randomOvals.push(
            new Oval(
                this.getRandomColorFromAvailableColors()
            )
        );
    };

    setupColors = () => {
        for (let i = 0; i < this.props.numberOfOvals; i++) {
            this.props.availableColors.push(this.generateRandomColor());
        }
    };

    updateGameState = () => {
        if(this.props.score.getCurrentScore() < 0) {
            this.setGameState(this.gameState.gameOver);
        }
    };

    getCurrentGameState = () => {
        return this.props.activeState;
    };

    setGameState  = (newState = null) => {
        this.props.activeState = newState;
    };

    removeGrownOval = (index) => {
        if (this.props.rightColor === this.props.randomOvals[index].props.color
            && this.props.randomOvals[index].hasReachedMaxGrowth()) {
            this.updateGameScore(this.props.score.getCurrentScore()-1);
        }
        this.props.randomOvals.splice(index, 1);
    };

    updateGameScore = (newScore) => {
        this.props.score.updateScore(newScore);
    }

    getCurrentGameScore = () => {
        return this.props.score.getCurrentScore();
    }

    mouseClickedEventListener = (event) => {
        switch (this.props.activeState) {
            case this.gameState.start:
            case this.gameState.gameOver:
                this.props.score.updateScore(this.props.gameScore);
                this.setGameState(this.gameState.open);
                break;
            case this.gameState.open:
                for (let i = this.props.randomOvals.length - 1; i >= 0; i--) {
                    if (this.hasCollidedWithMouse(event, randomOvals[i])) {
                        randomOvals[i].setIsDoneGrowing(true);
                        this.props.rightColor === randomOvals[i].getOvalColor() ?
                            this.props.score.updateScore(this.props.score.getCurrentScore() + 1) :
                            this.props.score.updateScore(this.props.score.getCurrentScore() - 1);
                        this.props.rightColor = this.getRandomColorFromAvailableColors();
                    }
                }
                break;
        }

    }

    hasCollidedWithMouse = (mouseClickedEvent, oval) => {
        const {ovalX,ovalY} = oval.getOvalCoords();
        const {ovalWidth,ovalHeight} = oval.getOvalDims();
        const {x, y} = mouseClickedEvent;
        return x >= ovalX - ovalWidth
            && x <= ovalX + ovalWidth
            && y >= ovalY - ovalHeight
            && y <= ovalY + ovalHeight;
    }
}
