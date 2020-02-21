class GameScore {
    props;

    constructor(initialScore = 0) {
        if (GameScore.instance == null) {
            this.props = {
                score: initialScore
            }
        }
        let GameScoreObject = OvalGame.instance;
        Object.freeze(GameScoreObject);
        return GameScoreObject;
    }

    getCurrentScore = () => {
        return this.props.score;
    }

    updateScore = (newScore) => {
        this.props.score = newScore;
    }
}
